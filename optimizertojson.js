const readlines = require('n-readlines');
const fs = require('fs');

let keymap = {
	"type": "type",
	"name": "formattedname",
	"plainname": "name",
	"phys": "physical",
	"fire": "fire",
	"wate": "water",
	"wind": "wind",
	"eart": "earth",
	"crit": "critical bonus",
	"weig": "weight",
	"rang": "range",
	"clas": "class",
	"strr": "req. str",
	"sscl": "str scaling",
	"dexr": "req. dex",
	"dscl": "dex scaling",
	"intr": "req. int",
	"iscl": "int scaling",
	"lore": "lore",
	"efct": "effect",
	"skil": "skill",
	"matr": "material",
	"pier": "piercing",
	"stmd": "stamina damage",
	"pois": "poison",
	"blee": "bleed",
	"slow": "slow",
	"petr": "petrify",
	"conf": "confusion",
	"item": "base item",
	"lvup": "base growth",
	"parr": "parry frames",
	
}

let target = "src/items.txt";
if (process.argv.length >= 3) {
	target = process.argv[2];
}

const reader = new readlines("./" + target);

/*
		set {item.type::1079} to 1
		set {item.name::1079} to "&6Jewel Encrusted Sword"
		set {item.phys::1079} to 30
		set {item.fire::1079} to 5
		set {item.wate::1079} to 5
		set {item.eart::1079} to 5
		set {item.wind::1079} to 5
		set {item.weig::1079} to 35
		set {item.rang::1079} to 3
		set {item.clas::1079} to "Medium"
		set {item.strr::1079} to 14
		set {item.sscl::1079} to "C"
		set {item.dexr::1079} to 14
		set {item.dscl::1079} to "C"
		set {item.lore::1079} to "An ornamental golden sword adorned with various expensive jewelry."
		set {item.item::1079} to glowing gold sword
		set {id.Jewel Encrusted Sword} to 1079
*/
let results = [];

const regex_prop = /\s+set {(?:temp\.)?item\.([a-z]+)::(\d+)} to (?:"([^"]+)"|([\w\d\. -]+))/i;
const regex_id = /\s+set {(?:temp\.)?id\.([^}]+)} to (\d+)/i;

let lineN;
while (lineN = reader.next()) {
	let line = lineN.toString("utf-8");
	
	let m, id, property, value;
	if (m = line.match(regex_prop)) {
		id = m[2];
		property = m[1];
		value = m[3] || m[4];
	} else if (m = line.match(regex_id)) {
		id = m[2];
		property = "plainname";
		value = m[1];
	}
	if (id)	{
		if (!results[id]) {
			results[id] = {};
		}
		if (property != "plainname" && results[id][property]) {
			//console.log(id, property, value);
			console.log("Duplicate pair:", id, property, "-", results[id][property], "->", value);
		}
		results[id][property] = value;
	}
	
	//console.log(line);
}

//console.log(results[1150]);
//console.log(results[1152]);

let output = [];

let ids = Object.keys(results);
//console.log(ids);
for (let j = ids.length; j--; j > 0) {
	let weapon = {
		"id": null,
		"name": null,
		"displayname": null,
		"swing": {},
		"damage": {},
		"attributes": {}
	};
	weapon.id = ids[j];
	//console.log(j, ids[j]);
	let props = Object.keys(results[ids[j]]);
	for (let i = props.length; i--; i > 0) {
		let k = props[i];
		let v = results[ids[j]][k];
		switch (k) {
			case "item": 
				weapon.appearance = v;
				break;
			case "type": 
				if (!weapon.upgrading) weapon.upgrading = {};
				weapon.upgrading.type = Number(v);
				break;
			case "lvup":
				if (!weapon.upgrading) weapon.upgrading = {};
				weapon.upgrading.base_scaling = Number(v);
				break;
			case "matr": 
				if (!weapon.upgrading) weapon.upgrading = {};
				weapon.upgrading.material = Number(v);
				break;
			case "name": 
				weapon.displayname = v;
				break;
			case "plainname": 
				weapon.name = v;
				break;
			case "phys": 
				weapon.damage.physical = Number(v);
				break;
			case "fire": 
				weapon.damage.fire = Number(v);
				break;
			case "wate": 
				weapon.damage.water = Number(v);
				break;
			case "wind": 
				weapon.damage.wind = Number(v);
				break;
			case "eart": 
				weapon.damage.earth = Number(v);
				break;
			case "crit": 
				if (!weapon.special) weapon.special = {};
				weapon.swing.crit = Number(v);
				break;
			case "weig": 
				weapon.swing.weight = Number(v);
				break;
			case "rang": 
				weapon.swing.range = Number(v);
				break;
			case "clas": 
				weapon.swing.class = v;
				break;
			case "strr": 
				if (!weapon.attributes.strength) weapon.attributes.strength = {};
				weapon.attributes.strength.required = Number(v);
				break;
			case "sscl": 
				if (!weapon.attributes.strength) weapon.attributes.strength = {};
				weapon.attributes.strength.scaling = v;
				break;
			case "dexr": 
				if (!weapon.attributes.dexterity) weapon.attributes.dexterity = {};
				weapon.attributes.dexterity.required = Number(v);
				break;
			case "dscl": 
				if (!weapon.attributes.dexterity) weapon.attributes.dexterity = {};
				weapon.attributes.dexterity.scaling = v;
				break;
			case "intr": 
				if (!weapon.attributes.intelligence) weapon.attributes.intelligence = {};
				weapon.attributes.intelligence.required = Number(v);
				break;
			case "iscl": 
				if (!weapon.attributes.intelligence) weapon.attributes.intelligence = {};
				weapon.attributes.intelligence.scaling = v;
				break;
			case "lore": 
				weapon.lore = v;
				break;
			case "efct": 
				if (!weapon.special) weapon.special = {};
				weapon.special.effect = v;
				break;
			case "skil": 
				if (!weapon.special) weapon.special = {};
				weapon.special.skill = v;
				break;
			case "pier": 
				if (!weapon.special) weapon.special = {};
				weapon.special.shield_piercing = Number(v);
				break;
			case "stmd": 
				if (!weapon.special) weapon.special = {};
				weapon.special.stamina_damage = Number(v);
				break;
			case "pois": 
				if (!weapon.status) weapon.status = {};
				weapon.status.poison = Number(v);
				break;
			case "blee": 
				if (!weapon.status) weapon.status = {};
				weapon.status.bleed = Number(v);
				break;
			case "slow": 
				if (!weapon.status) weapon.status = {};
				weapon.status.slow = Number(v);
				break;
			case "petr": 
				if (!weapon.status) weapon.status = {};
				weapon.status.petrify = Number(v);
				break;
			case "conf": 
				if (!weapon.status) weapon.status = {};
				weapon.status.confusion = Number(v);
				break;
			case "parr": 
				if (!weapon.special) weapon.special = {};
				weapon.special.parry_window = Number(v);
				break;
			case "pric":
				//Suspicious Man price override. If 0 cannot be sold by.
				weapon.price = Number(v);
				break;
			case "expn":
				//assumed expansion-only
				weapon.expansion = Number(v);
				break;
			default:
				console.log("unrecognized prop", weapon.id, props[i]);
		}
	}
	output.push(weapon);
}

fs.writeFileSync('./items.json', JSON.stringify(output, null, "\t"));