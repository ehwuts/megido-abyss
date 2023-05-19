(() => {
var id = {};
var level_float = -8;
	
var backgrounds = {
	"warrior": [7,4,6,5,3,2,"Crest Shield","Flax Helm","Flax Tunic","Flax Leggings","Flax Shoes","Shortsword","Falchion"],
	"paladin": [6,2,5,4,7,5,"","","","","","",""],
	"thief": [2,9,4,5,2,4,"","","","","","",""],
	"mage": [2,2,3,3,9,9,"","","","","","",""],
	"brute": [10,3,8,3,1,2,"","","","","","",""],
	"peasant": [3,3,3,3,3,3,"","","","","","",""]
};

function getStrength() {
	return id.strength.value | 0;
}
function getDexterity() {
	return id.dexterity.value | 0;
}
function getIntelligence() {
	return id.intelligence.value | 0;
}

function update(e) {
	id.level.innerText = "" + (level_float + getStrength() + getDexterity() + getIntelligence());
	weapons();
}

function loadBackground(e) {
	let b = backgrounds[e.target.value];
	if (!b) return;
	id.strength.value = b[0];
	id.dexterity.value = b[1];
	id.intelligence.value = b[4];
	let level = b.slice(0, 6).reduce((a, b) => a + b, 0) - 17;
	level_float = level - b[0] - b[1] - b[4];
	update();
}

function list_weapon(weapon) {
	return weapon.name + " " + truncatedstringFromFloat((weapon.damage.physical || 0) + (weapon.damage.wind || 0) + (weapon.damage.earth || 0) + (weapon.damage.water || 0) + (weapon.damage.fire || 0), 0) + " " + weapon.swing.range + "/" + weapon.swing.class + "/" + weapon.swing.weight + (weapon.attributes.strength ? " STR:" + weapon.attributes.strength.required + (weapon.attributes.strength.scaling ? "/" + weapon.attributes.strength.scaling:""):"") + (weapon.attributes.dexterity ? " DEX:" + weapon.attributes.dexterity.required + (weapon.attributes.dexterity.scaling ? "/" + weapon.attributes.dexterity.scaling:""):"") + (weapon.attributes.intelligence ? " INT:" + weapon.attributes.intelligence.required + (weapon.attributes.intelligence.scaling? "/" + weapon.attributes.intelligence.scaling:""):"") + (weapon.special?(weapon.special.effect ? " " + weapon.special.effect : "") + (weapon.special.ability ? " " + weapon.special.ability : ""):"");
}

function weapons() {
	let weapons = items.filter((x) => {
		return x.attributes && 
		(!x.attributes.strength || x.attributes.strength.required <= getStrength()) &&
		(!x.attributes.dexterity || x.attributes.dexterity.required <= getDexterity()) &&
		(!x.attributes.intelligence || x.attributes.intelligence.required <= getIntelligence());
	});
	id.weapons_usable.innerText = weapons.length;
	id.weapons_list.innerHTML = "";
	for (let x of weapons) {
		id.weapons_list.innerHTML += list_weapon(x) + "<br>";
	}
}

function truncatedstringFromFloat(f, p = 2) {
	//return (f + ' ').substring(0, 4);
	if (f > 0) {
		f += 0.00001;
	} else {
		f -= 0.00001;
	}
	return f.toFixed(p);
}

function init() {
	(id.strength = document.getElementById("strength")).addEventListener("change", update);
	(id.dexterity = document.getElementById("dexterity")).addEventListener("change", update);
	(id.intelligence = document.getElementById("intelligence")).addEventListener("change", update);
	(id.weapons_total = document.getElementById("weapons_total")).innerText = items.length;
	id.weapons_usable = document.getElementById("weapons_usable");
	id.weapons_list = document.getElementById("weapons");
	id.level = document.getElementById("level");
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