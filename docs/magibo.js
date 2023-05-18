(() => {
var id = {};
var level_float = 0;
	
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

function init() {
	(id.strength = document.getElementById("strength")).addEventListener("change", update);
	(id.dexterity = document.getElementById("dexterity")).addEventListener("change", update);
	(id.intelligence = document.getElementById("intelligence")).addEventListener("change", update);
	id.level = document.getElementById("level");
	for (let e of document.getElementsByClassName("background")) {
		if (e.tagName === "INPUT" && e.type === "button") {
			e.addEventListener("click", loadBackground);
		}
	}
}

window.addEventListener("load", init);	
})();