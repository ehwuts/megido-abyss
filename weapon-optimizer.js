const fs = require('fs');
var prompt = require('prompt-sync')();

const data = JSON.parse(fs.readFileSync("./items.json"));

let scales = {
	"S": 0.006,
	"A": 0.005,
	"B": 0.004,
	"C": 0.003,
	"D": 0.002,
	"E": 0.001
};

let speeds = {
	"Very Light": 7,
	"Light": 9,
	"Medium": 13,
	"Heavy": 15,
	"Very Heavy": 17,
	"Very Heavy+": 19 // this is just a guess
};

function downscale(v) {
	return Math.min(40, v) + 
	       Math.min(Math.max(0, v - 40), 30) / 2 +
		   Math.min(Math.max(0, v - 70), 29) / 4;
	let r = 0;
	if (v > 40) {
		r += 40;
		v -= 40;
		v /= 2;
		if (v > 15) {
			r += 15;
			v -= 15;
			v /= 2;
			if (v > 0) r += v;
		}
	}
	return r;
}

let strength, dexterity, intelligence, rank;

// stat select 
rank = Number(prompt("Weapon level [0-10]: ", 2));

// TODO alternately prefab the starting sets
console.log("\n== Manual stats ==")

strength = Number(prompt("STR [1-99]: ", 2));
if (strength === 0) strength = 3;
dexterity = Number(prompt("DEX [1-99]: ", 2));
if (dexterity === 0) dexterity = 3;
intelligence = Number(prompt("INT [1-99]: ", 2));
if (intelligence === 0) intelligence = 3;
blessing = intelligence >= 10 ? 25 + 1.5 * intelligence : 0;

strength_scale = downscale(strength);
dexterity_scale = downscale(dexterity);
intelligence_scale = downscale(intelligence);

// filter out weapons with unmet stats
let weapons = data.filter((x) => {
	return x.attributes && 
	(!x.attributes.strength || x.attributes.strength.required <= strength) &&
	(!x.attributes.dexterity || x.attributes.dexterity.required <= dexterity) &&
	(!x.attributes.intelligence || x.attributes.intelligence.required <= intelligence);
});
console.log("Meeting the stat requirements for", weapons.length, "/", data.length, "weapons.");

// sort method select
console.log("\n== Sorting ==");
console.log("1) damage/time | 2) damage/stam");
console.log("3) poison/time | 4) poison/stam");
console.log("5)  bleed/time | 6)  bleed/stam");
console.log("7)  single hit | 8)  charge hit");
console.log("9)    critical |");

let select_sorting = Number(prompt("$ "));
let use_blessing = prompt("Blessing? ");
use_blessing = (use_blessing === "Y" || use_blessing === "y");
let numerator, denominator;


//tfw magic numbers instead of enums masking magic numbers
switch (select_sorting) {
	case 1:
		numerator = 1;
		denominator = 1;
		break;
	case 2:
		numerator = 1;
		denominator = 2;
		break;
	case 3:
		numerator = 2;
		denominator = 1;
		break;
	case 4:
		numerator = 2;
		denominator = 2;
		break;
	case 5:
		numerator = 3;
		denominator = 1;
		break;
	case 6:
		numerator = 3;
		denominator = 2;
		break;
	case 7:
		numerator = 1;
		denominator = 3;
		break;
	case 8:
		numerator = 4;
		denominator = 3;
		break;
	case 9:
		numerator = 5;
		denominator = 3;
		break;
	default:
		console.log("Unsupported sort selection:", select_sorting);
		return;
}
//console.log(numerator, denominator);

// filter to status weapons and abort, if relevant
if (numerator === 2 || numerator === 3) {
	console.log(numerator);
	let p = ["damage", "poison", "bleed"][numerator - 1];
	weapons = weapons.filter((x) => {
		return x.status && x.status[p];
	});
	console.log(weapons.length, "with", p);
	if (weapons.length < 1) {
		console.log("Aborting.");
		return;
	}
}

// mutate weapons for state damage for processing simplicity
for (let i = weapons.length - 1; i >= 0; i--) {
	let rank_scale = 1 + rank * ((weapons[i].upgrading && weapons[i].upgrading.base_scaling) || 0.2);
	
	let attr = weapons[i].attributes;
	let attr_scale = 1 + rank * (
		strength_scale * ((attr.strength && attr.strength.scaling && scales[attr.strength.scaling]) || 0) +
		dexterity_scale * ((attr.dexterity && attr.dexterity.scaling && scales[attr.dexterity.scaling]) || 0) +
		intelligence_scale * ((attr.intelligence && attr.intelligence.scaling && scales[attr.intelligence.scaling]) || 0)
	);
	
	let scale = rank_scale * attr_scale;
	
	if (weapons[i].damage) {
		if (weapons[i].damage.physical) {
			weapons[i].damage.physical *= scale;
		}
		if (weapons[i].damage.fire) {
			weapons[i].damage.fire *= scale;
		}
		if (weapons[i].damage.water) {
			weapons[i].damage.water *= scale;
		}
		if (weapons[i].damage.wind) {
			weapons[i].damage.wind *= scale;
		}
		if (weapons[i].damage.earth) {
			weapons[i].damage.earth *= scale;
		}
	}
	//console.log(weapons[i].name, rank_scale, attr_scale);
}

weapons.sort((a, b) => {
	let a1, a2, b1, b2;
	switch (numerator) {
		case 1:
		case 4:
		case 5:
			a1 = (a.damage.physical || 0) + (a.damage.fire || 0) + (a.damage.water || 0) + (a.damage.wind || 0) + (a.damage.earth || 0);
			if (use_blessing) a1 += blessing;
			if (numerator === 4) a1 *= (3 + (a.swing.crit || 0));
			if (numerator === 5) a1 *= 2;
			b1 = (b.damage.physical || 0) + (b.damage.fire || 0) + (b.damage.water || 0) + (b.damage.wind || 0) + (b.damage.earth || 0);
			if (use_blessing) b1 += blessing;
			if (numerator === 4) b1 *= (3 + (b.swing.crit || 0));
			if (numerator === 5) b1 *= 2;
			break;
		case 2:
			a1 = a.status.poison;
			b1 = b.status.poison;
			break;
		case 3:
			a1 = a.status.bleed;
			b1 = b.status.bleed;
			break;
		default: 
			console.log("Invalid damage selection", numerator);
			return;
	}
	switch (denominator) {
		case 1:
			// time / class
			a2 = speeds[a.swing.class];
			b2 = speeds[b.swing.class];
			break;
		case 2:
			// stamina / weight
			a2 = a.swing.weight;
			b2 = b.swing.weight;
			break;
		case 3:
			a2 = 1;
			b2 = 1;
			break;
		default:
			console.log("Invalid swing property", denominator);
			return;
	}
	//console.log(a.name, a1, a2, b.name, b1, b2);
	a.score = a1 / a2;
	b.score = b1 / b2;
	return a.score - b.score;
});

function truncatedstringFromFloat(f, p = 2) {
	if (f > 0) {
		f += 0.00001;
	} else {
		f -= 0.00001;
	}
	/*let r = (f + ' ').substring(0, 4);
	return r;
	*/
	return f.toFixed(p);
}

function prettify(list) {
	for (item of list) {
		let out = "";
		let str_rank = "";
		if (rank) str_rank = rank;
		if (rank > 0) str_rank = "+" + str_rank;
		if (item.score) console.log("\x1b[33m" + truncatedstringFromFloat(item.score) + "\x1b[0m", item.name, str_rank);
		else console.log(item.name, str_rank);
		console.log(item.swing);
		console.log(item.damage);
		if (item.status) console.log(item.status);
		console.log("");
	}
}


console.log("");
prettify(weapons);
//console.log(weapons);