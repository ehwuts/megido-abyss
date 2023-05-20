(() => {
var id = {};
var scaled_strength, scaled_dexterity, scaled_intelligence;
// hp phys fire water earth wind poison bleed slow petrify confusion
var enemies = {
	"Training Dummy": [100000,0,0,0,0,0,0,0,0,0,0]
}

// str dex vit end int foc
var backgrounds = {
	"warrior": [7,4,6,5,3,2,"Crest Shield","Flax Helm","Flax Tunic","Flax Leggings","Flax Shoes","Shortsword","Falchion"],
	"paladin": [6,2,5,4,7,5,"Faded Royal Shield","","","","","Shortsword","Iron Mace"],
	"thief": [2,9,4,5,2,4,"Buckler","","","","","Shortsword","Dagger"],
	"mage": [2,2,3,3,9,9,"Chain Shield","","","","","Shortsword","Staff"],
	"brute": [10,3,8,3,1,2,"Concrete Shield","","","Loincloth","","Shortsword","Greataxe"],
	"peasant": [3,3,3,3,3,3,"Wooden Shield","","","","","Shortsword","Large Branch"]
};
let scales = {
	"S": 0.006,
	"A": 0.005,
	"B": 0.004,
	"C": 0.003,
	"D": 0.002,
	"E": 0.001
};
let speeds = {
	"Very Light": 7, //these are assumed correct from http://megido.wikidot.com/weapon-stats
	"Light": 9,
	"Medium": 13,
	"Heavy": 15,
	"Very Heavy": 17,
	"Very Heavy+": 19 // this is just a guess
};

function truncatedstringFromFloat(f, p = 2) {
	//return (f + ' ').substring(0, 4);
	if (f > 0) {
		f += 0.00001;
	} else {
		f -= 0.00001;
	}
	return f.toFixed(p);
}
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
function getStrength() {
	return id.strength.value | 0;
}
function getDexterity() {
	return id.dexterity.value | 0;
}
function getIntelligence() {
	return id.intelligence.value | 0;
}
function getEndurance() {
	return id.endurance.value | 0;
}
function getVitality() {
	return id.vitality.value | 0;
}
function getFocus() {
	return id.focus.value | 0;
}
function getUpgrade() {
	return id.upgrade.value | 0;
}

function update(e) {
	id.level.innerText = "" + (getStrength() + getDexterity() + getIntelligence() + getVitality() + getFocus() + getEndurance() - 17);
	scaled_strength = downscale(getStrength());
	scaled_dexterity = downscale(getDexterity());
	scaled_intelligence = downscale(getIntelligence());
	weapons();
}

function loadBackground(e) {
	let b = backgrounds[e.target.value];
	if (!b) return;
	id.strength.value = b[0];
	id.dexterity.value = b[1];
	id.intelligence.value = b[4];
	id.focus.value = b[5];
	id.vitality.value = b[2];
	id.endurance.value = b[3];
	let level = b.slice(0, 6).reduce((a, b) => a + b, 0) - 17;
	update();
}

function list_weapon(weapon) {
	let stat_scale = getUpgrade();
	let upgrade_scale = 1 + getUpgrade() * ((weapon.upgrading && weapon.upgrading.base_scaling) || 0.2);
	if (stat_scale) {
		stat_scale *= (((weapon.attributes.strength && weapon.attributes.strength.scaling && scales[weapon.attributes.strength.scaling]) || 0) * scaled_strength
		+ ((weapon.attributes.dexterity && weapon.attributes.dexterity.scaling && scales[weapon.attributes.dexterity.scaling]) || 0) * scaled_dexterity
		+ ((weapon.attributes.intelligence && weapon.attributes.intelligence.scaling && scales[weapon.attributes.intelligence.scaling]) || 0) * scaled_intelligence
		);
	}
	stat_scale += 1;
	let total_scale = upgrade_scale * stat_scale;
	//<tr><th>Weapon</th><th>Damage</th><th>Weight</th><th>Range</th><th>Class</th><th>STR</th><th>DEX</th><th>INT</th><th>Special</th></tr>
	let result =  "<tr><td>" + weapon.name + "</td><td>";
	let damages = [];
	if (weapon.damage.physical) {
		damages.push("<span class=\"phys\">" + truncatedstringFromFloat(weapon.damage.physical * total_scale) + "</span>");
	}
	if (weapon.damage.fire) {
		damages.push("<span class=\"fire\">" + truncatedstringFromFloat(weapon.damage.fire * total_scale) + "</span>");
	}
	if (weapon.damage.water) {
		damages.push("<span class=\"water\">" + truncatedstringFromFloat(weapon.damage.water * total_scale) + "</span>");
	}
	if (weapon.damage.earth) {
		damages.push("<span class=\"earth\">" + truncatedstringFromFloat(weapon.damage.earth * total_scale) + "</span>");
	}
	if (weapon.damage.wind) {
		damages.push("<span class=\"wind\">" + truncatedstringFromFloat(weapon.damage.wind * total_scale) + "</span>");
	}
	result += damages.join("<br>") + "</td>";
	result += "<td>" + weapon.swing.weight + "</td><td>" + weapon.swing.range + "</td><td>" + weapon.swing.class + "</td>";
	
	let attr = "";
	if (weapon.attributes.strength) {
		attr += weapon.attributes.strength.required;
		if (weapon.attributes.strength.scaling) attr += "<br>" + weapon.attributes.strength.scaling;
	}
	result += "<td>" + attr + "</td>";
	attr = "";
	if (weapon.attributes.dexterity) {
		attr += weapon.attributes.dexterity.required;
		if (weapon.attributes.dexterity.scaling) attr += "<br>" + weapon.attributes.dexterity.scaling;
	}
	result += "<td>" + attr + "</td>";
	attr = "";
	if (weapon.attributes.intelligence) {
		attr += weapon.attributes.intelligence.required;
		if (weapon.attributes.intelligence.scaling) attr += "<br>" + weapon.attributes.intelligence.scaling;
	}
	result += "<td>" + attr + "</td>";
	attr = "";
	if (weapon.special) {
		if (weapon.special.effect) attr += weapon.special.effect;
		if (weapon.special.skill) attr += " " + weapon.special.skill;
	}
	result += "<td>" + attr + "</td>";
	 result += "</tr>";
	 return result;
}

function weapons() {
	let weapons = items.filter((x) => {
		return x.attributes && 
		(!x.attributes.strength || x.attributes.strength.required <= getStrength()) &&
		(!x.attributes.dexterity || x.attributes.dexterity.required <= getDexterity()) &&
		(!x.attributes.intelligence || x.attributes.intelligence.required <= getIntelligence());
	});
	id.weapons_usable.innerText = weapons.length;
	let content = "<table>";
	content += "<tr><th>Weapon</th><th>Damage</th><th>Weight</th><th>Range</th><th>Class</th><th>STR</th><th>DEX</th><th>INT</th><th>Special</th></tr>";
	for (let x of weapons) {
		content += list_weapon(x);
	}
	content += "</table>";
	id.weapons_list.innerHTML = content;
}

function init() {
	(id.strength = document.getElementById("strength")).addEventListener("change", update);
	(id.dexterity = document.getElementById("dexterity")).addEventListener("change", update);
	(id.intelligence = document.getElementById("intelligence")).addEventListener("change", update);
	(id.endurance = document.getElementById("endurance")).addEventListener("change", update);
	(id.vitality = document.getElementById("vitality")).addEventListener("change", update);
	(id.focus = document.getElementById("focus")).addEventListener("change", update);
	(id.weapons_total = document.getElementById("weapons_total")).innerText = items.length;
	id.weapons_usable = document.getElementById("weapons_usable");
	id.weapons_list = document.getElementById("weapons");
	id.level = document.getElementById("level");
	(id.upgrade = document.getElementById("upgrade")).addEventListener("change", update);
	id.blessing = document.getElementById("blessing");
	for (let e of document.getElementsByClassName("background")) {
		if (e.tagName === "INPUT" && e.type === "button") {
			e.addEventListener("click", loadBackground);
		}
	}
	weapons();
}

window.addEventListener("load", init);	
})();