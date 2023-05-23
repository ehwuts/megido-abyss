(() => {
var id = {};
var scaled_strength = 3, scaled_dexterity = 3, scaled_intelligence = 3;
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
	return Math.min(99, Math.max(1, id.strength.value | 0));
}
function getDexterity() {
	return Math.min(99, Math.max(1, id.dexterity.value | 0));
}
function getIntelligence() {
	return Math.min(99, Math.max(1, id.intelligence.value | 0));
}
function getEndurance() {
	return Math.min(99, Math.max(1, id.endurance.value | 0));
}
function getVitality() {
	return Math.min(99, Math.max(1, id.vitality.value | 0));
}
function getFocus() {
	return Math.min(99, Math.max(1, id.focus.value | 0));
}
function getUpgrade() {
	return Math.min(10, Math.max(0, id.upgrade.value | 0));
}
function getStamina() {
	let end = getEndurance();
	if (end < 3) return 75;
	if (end < 10) return Math.floor(72.5 + end * 2.5);
	if (end < 21) return Math.floor(77 + end * 2);
	if (end < 41) return Math.floor(87 + end * 1.5);
	if (end < 99) return Math.floor(138.6 + end * 0.21);
	return 160;
/*
if endurance < 3:    //not possible to achieve by legitimate means
    stamina = 75
if endurance >= 3 and endurance <= 9:
    stamina = rounded down (80 + (endurance - 3) * 2.5)
if endurance >= 10 and endurance <= 20:
    stamina = 95 + (endurance - 9) * 2
if endurance >= 21 and endurance <= 40:
    stamina = rounded down (117 + (endurance - 20) * 1.5)
if endurance >= 41 and endurance < 99:
    stamina = rounded down (147 + (endurance - 40) * 0.21)
if endurance >= 99:
    stamina = 160
*/
}
function getHealth() {
	let vit = getVitality();
	if (vit < 2) return 260;
	if (vit === 2) return 390;
	if (vit === 3) return 448;
	if (vit === 4) return 501;
	if (vit === 5) return 553;
	if (vit === 6) return 598;
	if (vit === 7) return 644;
	if (vit === 8) return 689;
	if (vit === 9) return 728;
	if (vit === 10) return 767;
	if (vit < 21) return Math.floor(442 + vit * 32.5);
	if (vit < 31) return Math.floor(572 + vit * 26);
	if (vit < 41) return Math.floor(767 + vit * 19.5);
	if (vit < 51) return Math.floor(935 + vit * 15.3);
	if (vit < 76) return Math.floor(1300 + vit * 8);
	if (vit < 99) return Math.floor(1592.5 + vit * 4.1);
	return 2000;
/*
if vitality <= 1:    //not possible to achieve legitimately
    hp = 260
if vitality is 2:    //not possible to achieve legitimately
    hp = 390
if vitality is 3:
    hp = 448
if vitality is 4:
    hp = 501
if vitality is 5:
    hp = 553
if vitality is 6:
    hp = 598
if vitality is 7:
    hp = 644
if vitality is 8:
    hp = 689
if vitality is 9:
    hp = 728
if vitality is 10:
    hp = 767
if vitality >= 11 and vitality < 21:
    hp = rounded (767 + (vitality - 10) * 32.5)
if vitality >= 21 and vitality < 31:
    hp = rounded (1092 + (vitality - 20) * 26)
if vitality >= 31 and vitality < 41:
    hp = rounded (1352 + (vitality - 30) * 19.5)
if vitality >= 41 and vitality < 51:
    hp = rounded (1547 + (vitality - 40) * 15.3)
if vitality >= 51 and vitality < 76:
    hp = rounded (1700 + (vitality - 50) * 8)
if vitality >= 76 and vitality < 99:
    hp = rounded (1900 + (vitality - 75) * 4.1)
if vitality >= 99:
    hp = 2000
*/
}
function getMana() {
	let foc = getFocus();
	if (foc < 11) return foc * 10;
	if (foc < 21) return foc * 12 - 20;
	if (foc < 31) return foc * 10 + 20;
	if (foc < 41) return foc * 8 + 80;
	if (foc < 71) return foc * 6 + 160;
	if (foc < 99) return Math.floor(foc * 4.17 + 288.1);
	return 700;
/*
if focus <= 10:
    set mp to 10 + (focus - 1) * 10
else if focus <= 20:
    set mp to 100 + (focus - 10) * 12
else if focus <= 30:
    set mp to 220 + (focus - 20) * 10
else if focus <= 40:
    set mp to 320 + (focus - 30) * 8
else if focus <= 70:
    set mp to 400 + (focus - 40) * 6
else if focus <= 98:
    set mp to 580 + (focus - 70) * 4.17
else if focus is >= 99:
    set mp to 700
*/
}
function spellStaminaMultiplier() {
	let foc = getFocus();
	if (foc < 11) return 1;
	if (foc < 21) return 1.2 - foc * 0.02;
	if (foc < 41) return 1.1 - foc * 0.015;
	if (foc < 71) return 0.82 - foc * 0.008;
	if (foc < 99) return 0.4 - foc * 0.002;
	return 0.202;
/*
if focus <= 10:
    set reduction to 1
else if focus <= 20:
    set reduction to 1 - ((focus - 10)*0.02)
else if focus <= 40:
    set reduction to (1 - 0.2) - ((focus - 20)*0.015)
else if focus <= 70:
    set reduction to (1 - 0.5) - ((focus - 40)*0.008)
else if focus <= 99:
    set reduction to (1 - 0.74) - ((focus - 70)*0.002)
*/
}


function update(e) {
	id.level.innerText = "" + (getStrength() + getDexterity() + getIntelligence() + getVitality() + getFocus() + getEndurance() - 17);
	scaled_strength = downscale(getStrength());
	scaled_dexterity = downscale(getDexterity());
	scaled_intelligence = downscale(getIntelligence());
	id.health.innerText = getHealth();
	id.mana.innerText = getMana();
	id.stamina.innerText = getStamina();
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
	let result =  "<tr><td>" + weapon.name + "</td>";
	let damages = [];
	for (let x in weapon.damage) {
		damages.push("<span class=\"" + x + "\">" + truncatedstringFromFloat(weapon.damage[x] * total_scale, 0) + "</span>");
	}
	result += "<td>" + damages.join("+​") + "</td>";
	let statuses = [];
	for (let x in weapon.status) {
		statuses.push("<span class=\"" + x + "\">" + weapon.status[x] + "</span>");
	}
	result += "<td>" + statuses.join("+​") + "</td>";
	result += "<td>" + weapon.swing.weight + "</td><td>" + weapon.swing.range + "</td><td>" + weapon.swing.class + "</td>";
	
	let attr = "";
	if (weapon.attributes.strength) {
		attr += weapon.attributes.strength.required;
		attr += "<br>" + (weapon.attributes.strength.scaling ? weapon.attributes.strength.scaling : "None");
	}
	result += "<td>" + attr + "</td>";
	attr = "";
	if (weapon.attributes.dexterity) {
		attr += weapon.attributes.dexterity.required;
		attr += "<br>" + (weapon.attributes.dexterity.scaling ? weapon.attributes.dexterity.scaling : "None");
	}
	result += "<td>" + attr + "</td>";
	attr = "";
	if (weapon.attributes.intelligence) {
		attr += weapon.attributes.intelligence.required;
		attr += "<br>" + (weapon.attributes.intelligence.scaling ? weapon.attributes.intelligence.scaling : "None");
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
	content += "<tr><th>Weapon</th><th>Damage</th><th>Status</th><th>Weight</th><th>Range</th><th>Class</th><th>STR</th><th>DEX</th><th>INT</th><th>Special</th></tr>";
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
	id.health = document.getElementById("health");
	id.mana = document.getElementById("mana");
	id.stamina = document.getElementById("stamina");
	id.level = document.getElementById("level");
	(id.upgrade = document.getElementById("upgrade")).addEventListener("change", update);
	(id.blessing = document.getElementById("blessing")).addEventListener("change", update);
	for (let e of document.getElementsByClassName("background")) {
		if (e.tagName === "INPUT" && e.type === "button") {
			e.addEventListener("click", loadBackground);
		}
	}
	weapons();
}

window.addEventListener("load", init);	
})();