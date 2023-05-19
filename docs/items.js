var items = [
	{
		"id": "1198",
		"name": "Minos's Great Mace",
		"displayname": "&6Minos's Great Mace",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"physical": 92
		},
		"attributes": {
			"intelligence": {
				"scaling": "E",
				"required": 6
			},
			"strength": {
				"scaling": "D",
				"required": 22
			}
		},
		"appearance": "iron shovel",
		"special": {
			"effect": "Attacks Spend MP to Create Holy Explosions"
		},
		"lore": "The mace wielded by a mythical king of Alendale.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1197",
		"name": "Farmer's Hoe",
		"displayname": "&6Farmer's Hoe",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 33
		},
		"damage": {
			"physical": 38
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 5
			}
		},
		"appearance": "wooden hoe",
		"special": {
			"effect": "Slightly Increases Anima Obtained"
		},
		"lore": "A simple hoe for tilling soil, not intended for use in combat.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1196",
		"name": "Halberd",
		"displayname": "&6Halberd",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"physical": 64
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 6
			},
			"strength": {
				"scaling": "D",
				"required": 9
			}
		},
		"appearance": "iron shovel",
		"lore": "A polearm weapon with an axe head affixed to the top that is effective at both thrusting and cutting.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1195",
		"name": "Switchblade",
		"displayname": "&6Switchblade",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 17
		},
		"damage": {
			"physical": 42
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 6
			}
		},
		"appearance": "shears",
		"lore": "A common criminal's pocket knife that can be used quite effectively, even without much skill.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1194",
		"name": "Thornblade",
		"displayname": "&6Thornblade",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"physical": 54
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 6
			},
			"strength": {
				"scaling": "C",
				"required": 12
			}
		},
		"appearance": "gold sword",
		"lore": "A sword with thorny briars wrapped around its blade.",
		"status": {
			"bleed": 11
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1193",
		"name": "Fleshripper",
		"displayname": "&6Fleshripper",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"physical": 62
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 28
			}
		},
		"appearance": "gold axe",
		"special": {
			"effect": "Bonus Damage VS Recently Bled Enemies"
		},
		"lore": "An axe with an inward facing hook welded onto the top.",
		"upgrading": {
			"material": 1,
			"type": 1
		}
	},
	{
		"id": "1192",
		"name": "Bauble Scepter",
		"displayname": "&6Bauble Scepter",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 52
		},
		"attributes": {
			"intelligence": {
				"scaling": "C",
				"required": 28
			}
		},
		"appearance": "glowing stone hoe",
		"special": {
			"effect": "Converts All Status Buildup to Confusion"
		},
		"lore": "A debilitating weapon used to disorient foes.",
		"upgrading": {
			"material": 1,
			"type": 1
		}
	},
	{
		"id": "1191",
		"name": "Twisted Black Nail",
		"displayname": "&6Twisted Black Nail",
		"swing": {
			"crit": 2.5,
			"class": "Very Light",
			"range": 2,
			"weight": 14
		},
		"damage": {
			"physical": 32
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 28
			}
		},
		"appearance": "wooden sword",
		"special": {
			"effect": "Bonus Crit Damage VS Poisoned Enemies"
		},
		"lore": "A lightweight trickster's weapon used to carry out assassinations.",
		"upgrading": {
			"material": 1,
			"type": 1
		}
	},
	{
		"id": "1190",
		"name": "Training Blade",
		"displayname": "&6Training Blade",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 20
		},
		"damage": {
			"physical": 40
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 3
			},
			"strength": {
				"scaling": "D",
				"required": 3
			}
		},
		"appearance": "stone sword",
		"special": {
			"effect": "Cannot Deal Lethal Damage"
		},
		"lore": "A dull blade used for sparring practice.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1189",
		"name": "Spatha",
		"displayname": "&6Spatha",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 30
		},
		"damage": {
			"physical": 70
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 9
			},
			"strength": {
				"scaling": "D",
				"required": 9
			}
		},
		"appearance": "iron sword",
		"lore": "A strong and lightweight longsword commonly used in war and sport.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1188",
		"name": "Fang",
		"displayname": "&6Fang",
		"swing": {
			"class": "Light",
			"range": 2,
			"weight": 20
		},
		"damage": {
			"physical": 64
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 4
			},
			"strength": {
				"scaling": "E",
				"required": 4
			}
		},
		"appearance": "shears",
		"lore": "A sharpened fang from a wolf. Can be used to cause great tearing, even with a low amount of skill.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1187",
		"name": "Bloodhound Fang",
		"displayname": "&6Bloodhound Fang",
		"swing": {
			"class": "Light",
			"range": 2,
			"weight": 24
		},
		"damage": {
			"physical": 52
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "shears",
		"lore": "A fang from a hound trained for the hunt.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1186",
		"name": "Forked Spear",
		"displayname": "&6Forked Spear",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 34
		},
		"damage": {
			"physical": 40
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 11
			},
			"strength": {
				"scaling": "D",
				"required": 7
			}
		},
		"appearance": "gold shovel",
		"lore": "A spear with a forked, serrated tip reminiscent of a lizard's tongue.",
		"special": {
			"stamina_damage": -1
		},
		"status": {
			"bleed": 8
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1185",
		"name": "Icewind Greatsword",
		"displayname": "&6Icewind Greatsword",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"water": 20,
			"physical": 20
		},
		"attributes": {
			"intelligence": {
				"scaling": "S",
				"required": 60
			}
		},
		"appearance": "diamond sword",
		"special": {
			"effect": "Charged Attacks Spend MP to Unleash a Projectile"
		},
		"lore": "A greatsword with a magic crystal blade that requires great intelligence to wield.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1184",
		"name": "Frenzied Needle",
		"displayname": "&6Frenzied Needle",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 16
		},
		"damage": {
			"physical": 34
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 16
			}
		},
		"appearance": "glowing blaze rod",
		"lore": "A needle used to sew body parts together that has inherited a curse from the souls it desecrated.",
		"status": {
			"confusion": 5
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1183",
		"name": "Aquatic Hammer",
		"displayname": "&6Aquatic Hammer",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 42
		},
		"damage": {
			"water": 16,
			"physical": 44
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 11
			},
			"strength": {
				"scaling": "C",
				"required": 11
			}
		},
		"appearance": "iron axe",
		"special": {
			"effect": "Performs Jetstream Attacks While Underwater"
		},
		"lore": "A water enchanted axe wielded by the underwater guardians of Darkwater's inner sanctum.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1182",
		"name": "Cragblade",
		"displayname": "&6Cragblade",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 38
		},
		"damage": {
			"physical": 76
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 12
			}
		},
		"appearance": "diamond sword",
		"special": {
			"effect": "Bonus Damage VS Golems"
		},
		"lore": "An ancient sword whose surface is coated in a thin layer of jagged rocks.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1181",
		"name": "Cursed Straight Sword",
		"displayname": "&6Cursed Straight Sword",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 24
		},
		"damage": {
			"physical": 52
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 14
			}
		},
		"appearance": "glowing stone sword",
		"lore": "A mass produced sword given to Dysmere conscripts to fend off the forces of Illusion that has been corrupted by the bloodrot.",
		"status": {
			"bleed": 8
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1180",
		"name": "Greatlance",
		"displayname": "&6Greatlance",
		"swing": {
			"class": "Heavy",
			"range": 4,
			"weight": 40
		},
		"damage": {
			"physical": 48
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 18
			},
			"strength": {
				"scaling": "C",
				"required": 18
			}
		},
		"appearance": "glowing gold shovel",
		"special": {
			"skill": "viciousTrample",
			"stamina_damage": -1
		},
		"lore": "A jousting lance with an unusually sharp tip, implying its purpose was death rather than sport.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1179",
		"name": "Blackguard's Twinspear",
		"displayname": "&6Blackguard's Twinspear",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 30
		},
		"damage": {
			"physical": 40
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 20
			},
			"strength": {
				"scaling": "D",
				"required": 12
			}
		},
		"appearance": "glowing stone shovel",
		"lore": "One of a pair of adorned spears with a shockingly high quality of craftsmanship. Can perform a unique dual attack with its twin.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1178",
		"name": "Asp Rapier",
		"displayname": "&6Asp Rapier",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"physical": 46
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 14
			},
			"strength": {
				"scaling": "D",
				"required": 8
			}
		},
		"appearance": "gold sword",
		"special": {
			"effect": "Inflicts Self Poison",
			"parry_window": -2
		},
		"lore": "A rapier dripping with venom. Incredibly toxic, to the point where its attacks poison its wielder as well.",
		"status": {
			"poison": 15
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1177",
		"name": "Penal Blade",
		"displayname": "&6Penal Blade",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"physical": 64
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 10
			},
			"strength": {
				"scaling": "D",
				"required": 10
			}
		},
		"appearance": "iron sword",
		"special": {
			"effect": "Increases Attack When Below 20%% HP"
		},
		"lore": "A cursed blade used to execute prisoners.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1176",
		"name": "Whirlwind Hammer",
		"displayname": "&6Whirlwind Hammer",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"wind": 15,
			"physical": 30
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 16
			}
		},
		"appearance": "glowing gold pickaxe",
		"lore": "A battle hammer with a wind enchantment. Many warriors tried to stand against this stormy weapon, but the wind blew them all away.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1175",
		"name": "Shiv",
		"displayname": "&6Shiv",
		"swing": {
			"class": "Light",
			"range": 2,
			"weight": 22
		},
		"damage": {
			"physical": 60
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 8
			}
		},
		"appearance": "stone sword",
		"lore": "A makeshift weapon crafted out of pieces of scrap metal.",
		"status": {
			"bleed": 8
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1174",
		"name": "Sentry Arm",
		"displayname": "&6Sentry Arm",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 52
		},
		"damage": {
			"physical": 76
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 32
			}
		},
		"appearance": "glowing stick",
		"lore": "A giant slab of iron cut from the body of a Sentry.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1173",
		"name": "Lasso",
		"displayname": "&6Lasso",
		"swing": {
			"class": "Light",
			"range": 5,
			"weight": 10
		},
		"damage": {
			"physical": 26
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 6
			},
			"strength": {
				"scaling": "D",
				"required": 6
			}
		},
		"appearance": "lead",
		"lore": "A rope used to round up cattle that pulls its targets closer.",
		"special": {
			"stamina_damage": -2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1172",
		"name": "Yggdrasil Branch",
		"displayname": "&6Yggdrasil Branch",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 20
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 3
			}
		},
		"appearance": "stick",
		"lore": "Nothing more than a tree branch; and yet, this one seems to hold considerable potential...",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1171",
		"name": "Vampire Killer",
		"displayname": "&6Vampire Killer",
		"swing": {
			"class": "Light",
			"range": 5,
			"weight": 18
		},
		"damage": {
			"physical": 22
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 19
			}
		},
		"appearance": "lead",
		"special": {
			"effect": "Bonus Damage VS Creatures of the Night",
			"stamina_damage": -2
		},
		"lore": "A holy whip crafted from the branches of a sacred tree.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1170",
		"name": "Lava Whip",
		"displayname": "&6Lava Whip",
		"swing": {
			"class": "Light",
			"range": 5,
			"weight": 14
		},
		"damage": {
			"fire": 8,
			"physical": 8
		},
		"attributes": {
			"intelligence": {
				"scaling": "C",
				"required": 7
			},
			"dexterity": {
				"scaling": "C",
				"required": 11
			}
		},
		"appearance": "glowing lead",
		"lore": "A steel wire whip that has been enchanted with the lord of ash's power.",
		"special": {
			"stamina_damage": -2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1169",
		"name": "Notched Whip",
		"displayname": "&6Notched Whip",
		"swing": {
			"class": "Light",
			"range": 5,
			"weight": 16
		},
		"damage": {
			"physical": 18
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 21
			}
		},
		"appearance": "lead",
		"lore": "A whip covered in thorny spikes that inflicts bleeding on its targets.",
		"status": {
			"bleed": 6
		},
		"special": {
			"stamina_damage": -2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1168",
		"name": "Cat o' Nine Tails",
		"displayname": "&6Cat o' Nine Tails",
		"swing": {
			"class": "Light",
			"range": 5,
			"weight": 16
		},
		"damage": {
			"physical": 26
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 17
			}
		},
		"appearance": "lead",
		"lore": "A knotted cord used in the infliction of punishment on prisoners.",
		"special": {
			"stamina_damage": -2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1167",
		"name": "Whip",
		"displayname": "&6Whip",
		"swing": {
			"class": "Light",
			"range": 5,
			"weight": 14
		},
		"damage": {
			"physical": 36
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 9
			}
		},
		"appearance": "lead",
		"lore": "A whip of leather that can be used to lash out at foes. Whips only deal damage at the end of their attack range; however, one can attack a shorter distance while sneaking.",
		"special": {
			"stamina_damage": -2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1166",
		"name": "Warden Halberd",
		"displayname": "&6Warden Halberd",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"physical": 56
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 12
			},
			"strength": {
				"scaling": "C",
				"required": 12
			}
		},
		"appearance": "glowing iron shovel",
		"special": {
			"skill": "overheadSlam"
		},
		"lore": "An imposing halberd wielded by the overseer to intimidate both ally and foe.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1165",
		"name": "Rusty Sword",
		"displayname": "&6Rusty Sword",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 22
		},
		"damage": {
			"physical": 8
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 1
			}
		},
		"appearance": "stone sword",
		"lore": "A rusty sword that is beginning to fall apart from years of neglect.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1164",
		"name": "Frostbitten Dagger",
		"displayname": "&6Frostbitten Dagger",
		"swing": {
			"crit": 2.5,
			"class": "Very Light",
			"range": 2,
			"weight": 16
		},
		"damage": {
			"water": 10,
			"physical": 10
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 6
			},
			"dexterity": {
				"scaling": "C",
				"required": 12
			}
		},
		"appearance": "glowing stone sword",
		"lore": "A dagger enchanted with a frozen curse to chill its targets to the bone.",
		"status": {
			"slow": 5
		},
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1163",
		"name": "Wooden Mace",
		"displayname": "&6Wooden Mace",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"physical": 48
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 5
			}
		},
		"appearance": "wood pickaxe",
		"lore": "A mace that has been refined out of a branch of wood. Deals bonus stamina damage against guarding foes.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1162",
		"name": "Ent Halberd",
		"displayname": "&6Ent Halberd",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 44
		},
		"damage": {
			"physical": 100
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 12
			}
		},
		"appearance": "wood shovel",
		"lore": "A wooden halberd that has been refined out of an Ent appendage. Deals bonus stamina damage against guarding foes.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1161",
		"name": "Hiking Staff",
		"displayname": "&6Hiking Staff",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 62
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 8
			}
		},
		"appearance": "wood hoe",
		"special": {
			"effect": "Increases Attack Hyperarmor",
			"parry_window": -1
		},
		"lore": "A simple staff designed to help travelers maintain their balance. Can be used to parry.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1160",
		"name": "Harpoon",
		"displayname": "&6Harpoon",
		"swing": {
			"class": "Heavy",
			"range": 4,
			"weight": 38
		},
		"damage": {
			"water": 10,
			"physical": 42
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "iron shovel",
		"lore": "A long spiked tool used to impale fish.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1159",
		"name": "Mage Masher",
		"displayname": "&6Mage Masher",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 16
			},
			"strength": {
				"scaling": "D",
				"required": 6
			}
		},
		"appearance": "glowing gold sword",
		"special": {
			"effect": "Attacks Reduce Enemy Buff Length"
		},
		"lore": "An assassin's blade forged specifically for slaying magic users.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1158",
		"name": "Bloodroot Mace",
		"displayname": "&6Bloodroot Mace",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 10
			},
			"strength": {
				"scaling": "C",
				"required": 10
			}
		},
		"appearance": "glowing wooden shovel",
		"lore": "A mace reinforced with cursed roots that cause internal bleeding in enemies.",
		"status": {
			"bleed": 12
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1157",
		"name": "Soulbrandt",
		"displayname": "&6Soulbrandt",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 30
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"intelligence": {
				"required": 1
			}
		},
		"appearance": "glowing iron sword",
		"special": {
			"effect": "Attacks Ignore Shields",
			"shield_piercing": 0
		},
		"lore": "A legendary blade used by the Darkwater civilization to dispel barriers.",
		"upgrading": {
			"material": 2,
			"base_scaling": 0.4,
			"type": 1
		}
	},
	{
		"id": "1156",
		"name": "Sword of Judgment",
		"displayname": "&6Sword of Judgment",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"physical": 40
		},
		"attributes": {
			"dexterity": {
				"scaling": "S",
				"required": 70
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"skill": "JudgmentBlade2"
		},
		"lore": "One in a pair of blades which was used by an evil god to pass judgment on humanity over many aeons.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1155",
		"name": "Greatsword of Judgment",
		"displayname": "&6Greatsword of Judgment",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 42
		},
		"damage": {
			"physical": 55
		},
		"attributes": {
			"strength": {
				"scaling": "S",
				"required": 70
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"skill": "JudgmentBlade1"
		},
		"lore": "One in a pair of blades which was used by an evil god to pass judgment on humanity over many aeons.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1154",
		"name": "Blade of the Origin II",
		"displayname": "&6Blade of the Origin II",
		"swing": {
			"class": "Very Heavy+",
			"range": 6,
			"weight": 200
		},
		"damage": {
			"physical": 200
		},
		"attributes": {
			"strength": {
				"required": 99
			}
		},
		"upgrading": {
			"material": 1,
			"base_scaling": 0.1,
			"type": 1
		},
		"status": {
			"bleed": 12
		}
	},
	{
		"id": "1153",
		"name": "Blade of the Origin",
		"displayname": "&6Blade of the Origin",
		"swing": {
			"class": "Very Heavy+",
			"range": 6,
			"weight": 200
		},
		"damage": {
			"physical": 200
		},
		"attributes": {
			"strength": {
				"required": 99
			}
		},
		"upgrading": {
			"material": 1,
			"base_scaling": 0.1,
			"type": 1
		}
	},
	{
		"id": "1152",
		"name": "Bone Chip",
		"displayname": "&6Bone Chip",
		"swing": {
			"class": "Very Light",
			"range": 1,
			"weight": 4
		},
		"damage": {
			"physical": 10
		},
		"attributes": {
			"strength": {
				"required": 1
			}
		},
		"appearance": "bone",
		"lore": "A shattered shard of a former inmate's skeleton.",
		"special": {
			"stamina_damage": -2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1151",
		"name": "Poison Ivy Clippers",
		"displayname": "&6Poison Ivy Clippers",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 25
		},
		"damage": {
			"physical": 36
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 18
			}
		},
		"appearance": "wooden hoe",
		"lore": "A set of hedge clippers that have been wrapped in poison ivy, causing buildup in foes.",
		"status": {
			"poison": 10
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1150",
		"name": "Igniter",
		"displayname": "&6Igniter",
		"swing": {
			"class": "Light",
			"range": 2,
			"weight": 20
		},
		"damage": {
			"fire": 8,
			"physical": 2
		},
		"attributes": {
			"dexterity": {
				"required": 2
			}
		},
		"appearance": "blaze rod",
		"special": {
			"effect": "Lights Enemies and Torches",
			"stamina_damage": -2
		},
		"lore": "A small tool that can be used to light torches.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1149",
		"name": "Hero's Blade",
		"displayname": "&6Hero's Blade",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"wind": 4,
			"earth": 4,
			"water": 4,
			"fire": 4,
			"physical": 24
		},
		"attributes": {
			"dexterity": {
				"scaling": "S",
				"required": 40
			},
			"strength": {
				"scaling": "S",
				"required": 40
			}
		},
		"appearance": "glowing gold sword",
		"lore": "The blade wielded by two legendary heroes who prevented the Origin from wiping out humanity in an age past.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1148",
		"name": "Crystal Reaper",
		"displayname": "&6Crystal Reaper",
		"swing": {
			"class": "Heavy",
			"range": 2,
			"weight": 42
		},
		"damage": {
			"physical": 140
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 70
			}
		},
		"appearance": "iron hoe",
		"lore": "A short scythe forged out of some sort of enchanted crystal.",
		"special": {
			"shield_piercing": 0.5
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1147",
		"name": "Crystal Blade",
		"displayname": "&6Crystal Blade",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 35
		},
		"damage": {
			"water": 24,
			"physical": 24
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 16
			},
			"dexterity": {
				"scaling": "B",
				"required": 24
			}
		},
		"appearance": "glowing iron sword",
		"lore": "A blade of crystal enchanted with abyssal powers of ice.",
		"status": {
			"slow": 8
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1146",
		"name": "Excalibur",
		"displayname": "&6Excalibur",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 42
		},
		"damage": {
			"physical": 60
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 16
			},
			"strength": {
				"scaling": "B",
				"required": 32
			}
		},
		"appearance": "glowing stone sword",
		"special": {
			"effect": "Charged Attacks Spend HP to Unleash a Shockwave"
		},
		"lore": "A legendary blade wielded by the first king of Alendale; requires great finesse to wield effectively.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1145",
		"name": "Faust's Wand",
		"displayname": "&6Faust's Wand",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 14
		},
		"damage": {
			"physical": 24
		},
		"attributes": {
			"intelligence": {
				"scaling": "B",
				"required": 24
			}
		},
		"appearance": "stick",
		"lore": "A wand wielded by a servant of an ancient servant of an incarnation of the Origin.",
		"status": {
			"slow": 4
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1144",
		"name": "Giant's Axe",
		"displayname": "&6Giant's Axe",
		"swing": {
			"class": "Very Heavy",
			"range": 2,
			"weight": 62
		},
		"damage": {
			"physical": 240
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 70
			}
		},
		"appearance": "stone axe",
		"lore": "A monumental slab of stone that is said to have been wielded by an ancient relative of humans.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1143",
		"name": "Ragnarok",
		"displayname": "&6Ragnarok",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"physical": 48
		},
		"attributes": {
			"dexterity": {
				"scaling": "A",
				"required": 30
			},
			"strength": {
				"scaling": "A",
				"required": 30
			}
		},
		"appearance": "diamond sword",
		"lore": "A legendary blade said to have been used in the fight against an ancient warlock.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1142",
		"name": "Staff of Eden",
		"displayname": "&6Staff of Eden",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 30
		},
		"damage": {
			"physical": 34
		},
		"attributes": {
			"intelligence": {
				"scaling": "S",
				"required": 60
			}
		},
		"appearance": "diamond hoe",
		"lore": "An expertly forged staff said to have been used in the fight against an ancient warlock.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1141",
		"name": "Gungnir",
		"displayname": "&6Gungnir",
		"swing": {
			"class": "Very Heavy",
			"range": 4,
			"weight": 50
		},
		"damage": {
			"wind": 12,
			"physical": 50
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 12
			},
			"dexterity": {
				"scaling": "B",
				"required": 36
			}
		},
		"appearance": "diamond shovel",
		"lore": "A legendary spear said to have the power to split the sky itself.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1140",
		"name": "Foul Ripper",
		"displayname": "&6Foul Ripper",
		"swing": {
			"class": "Medium",
			"range": 2,
			"weight": 28
		},
		"damage": {
			"physical": 44
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 12
			},
			"strength": {
				"scaling": "B",
				"required": 24
			}
		},
		"appearance": "wood hoe",
		"lore": "A lacerating scythe wielded by the phantoms of those once massacred for their anima.",
		"special": {
			"shield_piercing": 0.5
		},
		"status": {
			"bleed": 12
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1139",
		"name": "Sapping Mace",
		"displayname": "&6Sapping Mace",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 44
		},
		"damage": {
			"physical": 82
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 22
			}
		},
		"appearance": "glowing iron shovel",
		"special": {
			"effect": "Reduces Victims' Stamina"
		},
		"lore": "A mace used by the constructs of a long forgotten civilization that saps its victims' will.",
		"status": {
			"slow": 12
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1138",
		"name": "Runic Blade",
		"displayname": "&6Runic Blade",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 38
		},
		"damage": {
			"physical": 64
		},
		"attributes": {
			"intelligence": {
				"scaling": "C",
				"required": 16
			},
			"strength": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "glowing iron sword",
		"lore": "An enchanted blade that channels the wielder's intelligence. Wielded by those that fought against the dogmatic teachings of an ancient religion.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1137",
		"name": "Conductor's Wand",
		"displayname": "&6Conductor's Wand",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 14
		},
		"damage": {
			"physical": 20
		},
		"attributes": {
			"intelligence": {
				"scaling": "S",
				"required": 99
			}
		},
		"appearance": "stick",
		"lore": "A wand that can only be wielded by the most intelligent. Produces beautiful melodies when used by those with 200 IQ.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1136",
		"name": "Needle of Agony",
		"displayname": "&6Needle of Agony",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 16
		},
		"damage": {
			"physical": 20
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 25
			}
		},
		"appearance": "stick",
		"special": {
			"effect": "Inflicts Poison/Bleed on Slowed Targets"
		},
		"lore": "A cursed needle coated with a neurotoxin that neutralizes its target.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"slow": 5
		}
	},
	{
		"id": "1135",
		"name": "Spiked Mace",
		"displayname": "&6Spiked Mace",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 53
		},
		"damage": {
			"physical": 74
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 28
			}
		},
		"appearance": "iron shovel",
		"lore": "An iron mace with impaling spikes on the end, allowing it to deal massive bleed damage.",
		"status": {
			"bleed": 17
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1134",
		"name": "Paddle",
		"displayname": "&6Paddle",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 36
		},
		"damage": {
			"physical": 60
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 2
			}
		},
		"appearance": "wood shovel",
		"lore": "A common rowboat paddle.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1133",
		"name": "Coral Greatsword",
		"displayname": "&6Coral Greatsword",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"water": 22,
			"physical": 58
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 16
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"effect": "Increases Water Defense"
		},
		"lore": "A legendary blade enchanted to withstand the mightiest oceans.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1132",
		"name": "Rusted Greatsword",
		"displayname": "&6Rusted Greatsword",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 44
		},
		"damage": {
			"physical": 66
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 16
			}
		},
		"appearance": "glowing stone sword",
		"lore": "A greatsword that is falling apart with rust from being submerged for aeons.",
		"status": {
			"slow": 11
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1131",
		"name": "Coral Hammer",
		"displayname": "&6Coral Hammer",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"water": 25,
			"physical": 38
		},
		"attributes": {
			"intelligence": {
				"scaling": "C",
				"required": 12
			},
			"strength": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "glowing stone axe",
		"lore": "A seaweed covered hammer wielded by the abominations that feed on corpses in the Darkwater River.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1130",
		"name": "Stonechipper",
		"displayname": "&6Stonechipper",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"physical": 100
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 30
			}
		},
		"appearance": "stone pickaxe",
		"special": {
			"effect": "Attacks Ignore Shield Stability"
		},
		"lore": "A lighter than average pickaxe used for mining in higher altitudes.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1129",
		"name": "Fishing Pole",
		"displayname": "&6Fishing Pole",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 44
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 10
			},
			"strength": {
				"scaling": "E",
				"required": 10
			}
		},
		"appearance": "fishing rod",
		"lore": "An ordinary fishing pole that can be used to reel in treasures and enemies.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1128",
		"name": "Secret Dirk",
		"displayname": "&6Secret Dirk",
		"swing": {
			"crit": 3,
			"class": "Very Light",
			"range": 2,
			"weight": 14
		},
		"damage": {
			"physical": 28
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 10
			}
		},
		"appearance": "wooden sword",
		"lore": "A small backup dagger used mainly for performing critical hits.",
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1127",
		"name": "Animabane",
		"displayname": "&6Animabane",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 20
		},
		"damage": {
			"physical": 32
		},
		"attributes": {
			"dexterity": {
				"scaling": "S",
				"required": 60
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"effect": "Charged Attacks Perform a Flurry"
		},
		"lore": "A powerful katana enchanted with the powers of anima.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1126",
		"name": "Splintering Wand",
		"displayname": "&6Splintering Wand",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 10
		},
		"damage": {
			"physical": 20
		},
		"attributes": {
			"intelligence": {
				"scaling": "C",
				"required": 10
			}
		},
		"appearance": "stick",
		"lore": "A well used wand that has become brittle and covered in splinters over centuries of use.",
		"status": {
			"bleed": 6
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1125",
		"name": "Aquarius Greatsword",
		"displayname": "&6Aquarius Greatsword",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"water": 35,
			"physical": 35
		},
		"attributes": {
			"intelligence": {
				"scaling": "S",
				"required": 5
			},
			"strength": {
				"scaling": "E",
				"required": 24
			}
		},
		"appearance": "glowing stone sword",
		"lore": "A huge sword wielded by the statues in Darkwater Palace that bears a potent water enchantment.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1124",
		"name": "Prophet's Scepter",
		"displayname": "&6Prophet's Scepter",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 28
		},
		"attributes": {
			"intelligence": {
				"scaling": "S",
				"required": 40
			}
		},
		"appearance": "glowing gold hoe",
		"special": {
			"skill": "animaShotCircle"
		},
		"lore": "A scepter equipped with a powerful spell to keep back the masses from a distance.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1123",
		"name": "Templar Straight Sword",
		"displayname": "&6Templar Straight Sword",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 27
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 20
			}
		},
		"appearance": "glowing diamond sword",
		"lore": "A lighter variant of a sword commonly wielded by Darkwater Templars.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1122",
		"name": "Defiled Great Hammer",
		"displayname": "&6Defiled Great Hammer",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 44
		},
		"damage": {
			"physical": 55
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 12
			}
		},
		"appearance": "iron pickaxe",
		"lore": "A heavy hammer used by the constructs that serve the queen of Darkwater Sanctum. This one has been particularly corrupted by the powers of the abyss.",
		"status": {
			"bleed": 16
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1121",
		"name": "Watcher Axe",
		"displayname": "&6Watcher Axe",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 48
		},
		"damage": {
			"wind": 10,
			"earth": 10,
			"water": 10,
			"fire": 10,
			"physical": 30
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 8
			},
			"dexterity": {
				"scaling": "D",
				"required": 8
			},
			"strength": {
				"scaling": "C",
				"required": 14
			}
		},
		"appearance": "glowing gold axe",
		"lore": "An axe wielded by magical beings who were left to guard Luveno's ultimate contingency.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1120",
		"name": "Scorching Poker",
		"displayname": "&6Scorching Poker",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 30
		},
		"damage": {
			"fire": 30,
			"physical": 30
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 8
			},
			"dexterity": {
				"scaling": "D",
				"required": 8
			}
		},
		"appearance": "blaze rod",
		"lore": "A sizzling poker used to brand those who would trespass in the forbidden archives.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1119",
		"name": "Chronos Axe",
		"displayname": "&6Chronos Axe",
		"swing": {
			"class": "Very Heavy+",
			"range": 3,
			"weight": 100
		},
		"damage": {
			"physical": 300
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 50
			}
		},
		"appearance": "glowing stone axe",
		"lore": "The largest axe in existence. Very powerful when used by a skilled warrior, but extraordinarily slow.",
		"upgrading": {
			"base_scaling": 0,
			"type": 1
		}
	},
	{
		"id": "1118",
		"name": "Flaming Brand",
		"displayname": "&6Flaming Brand",
		"swing": {
			"class": "Medium",
			"range": 2,
			"weight": 28
		},
		"damage": {
			"fire": 70,
			"physical": 70
		},
		"attributes": {
			"dexterity": {
				"scaling": "A",
				"required": 50
			}
		},
		"appearance": "glowing blaze rod",
		"lore": "An extremely short brand that would be quite useful, except that its attacks come out randomly delayed (or not at all).",
		"upgrading": {
			"base_scaling": 0,
			"type": 1
		}
	},
	{
		"id": "1117",
		"name": "Paralyzing Claw",
		"displayname": "&6Paralyzing Claw",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 16
		},
		"damage": {
			"physical": 28
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 24
			}
		},
		"appearance": "shears",
		"lore": "An insect claw coated in a layer of debilitating venom.",
		"status": {
			"petrify": 2,
			"slow": 4
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1116",
		"name": "Earthen Club",
		"displayname": "&6Earthen Club",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"earth": 20,
			"physical": 45
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 16
			}
		},
		"appearance": "glowing stick",
		"lore": "A club crafted out of clay that has been enchanted with earth.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1115",
		"name": "Flower Blade",
		"displayname": "&6Flower Blade",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 120
		},
		"attributes": {
			"dexterity": {
				"scaling": "A",
				"required": 30
			},
			"strength": {
				"scaling": "A",
				"required": 30
			}
		},
		"appearance": "glowing gold sword",
		"lore": "A legendary blade that scales extremely well with the wielder's combat prowess. Wildly effective when used, but every swing has a small chance to make the sword freak out and disappear for 2 weeks.",
		"upgrading": {
			"base_scaling": 0,
			"type": 1
		}
	},
	{
		"id": "1114",
		"name": "Slag Club",
		"displayname": "&6Slag Club",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 70
		},
		"damage": {
			"physical": 88
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 60
			}
		},
		"appearance": "stick",
		"lore": "An incredibly unwieldly club that can only be swung around by the strongest of the strong.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1113",
		"name": "Faerie Wand",
		"displayname": "&6Faerie Wand",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 8
		},
		"damage": {
			"earth": 8,
			"physical": 8
		},
		"attributes": {
			"intelligence": {
				"scaling": "S",
				"required": 10
			},
			"dexterity": {
				"scaling": "E",
				"required": 5
			}
		},
		"appearance": "glowing blaze rod",
		"lore": "An enchanted wand that was commonly used by a long extinct race.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1112",
		"name": "Kotoborro Mage Staff",
		"displayname": "&6Kotoborro Mage Staff",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 22
		},
		"damage": {
			"physical": 42
		},
		"attributes": {
			"intelligence": {
				"scaling": "C",
				"required": 8
			}
		},
		"appearance": "stone hoe",
		"lore": "A staff wielded by Kotoborro mages to complement their spells.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1111",
		"name": "Kotoborro Soldier Sword",
		"displayname": "&6Kotoborro Soldier Sword",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 48
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 8
			},
			"strength": {
				"scaling": "B",
				"required": 16
			}
		},
		"appearance": "wood sword",
		"lore": "A straight sword that is commonly wielded by the pygmy warriors of Kotoborro.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1110",
		"name": "Baneful Pincers",
		"displayname": "&6Baneful Pincers",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"physical": 51
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 25
			}
		},
		"appearance": "shears",
		"special": {
			"skill": "fangStrike"
		},
		"lore": "A pair of pincers torn from the corpse of the horror that fed on the corpses in the depths of the Howling Gulch.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1109",
		"name": "Delirium Crusher",
		"displayname": "&6Delirium Crusher",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 48
		},
		"damage": {
			"physical": 72
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 50
			}
		},
		"appearance": "glowing wood axe",
		"special": {
			"skill": "forcefulBlow"
		},
		"lore": "An axe wielded by an incarnation of the Entity tasked with rotting the minds of the pygmy civilization.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"confusion": 11
		}
	},
	{
		"id": "1108",
		"name": "Delirium Reaper",
		"displayname": "&6Delirium Reaper",
		"swing": {
			"class": "Light",
			"range": 2,
			"weight": 24
		},
		"damage": {
			"physical": 36
		},
		"attributes": {
			"dexterity": {
				"scaling": "A",
				"required": 36
			},
			"strength": {
				"scaling": "E",
				"required": 8
			}
		},
		"appearance": "glowing wood hoe",
		"special": {
			"skill": "neckSwipe",
			"shield_piercing": 0.75
		},
		"lore": "A scythe wielded by an incarnation of the Entity tasked with rotting the minds of the pygmy civilization.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"confusion": 6
		}
	},
	{
		"id": "1107",
		"name": "Quake Hammer",
		"displayname": "&6Quake Hammer",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 44
		},
		"damage": {
			"physical": 88
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 24
			}
		},
		"appearance": "glowing stone pickaxe",
		"special": {
			"effect": "Increases Plunge Radius"
		},
		"lore": "An unwieldly hammer that leaves great destruction in its wake.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1106",
		"name": "Troll Axe",
		"displayname": "&6Troll Axe",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 43
		},
		"damage": {
			"physical": 130
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 50
			}
		},
		"appearance": "stone axe",
		"lore": "A terribly destructive slab of stone that can be wielded like an axe.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1105",
		"name": "Mercury Staff",
		"displayname": "&6Mercury Staff",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 30
		},
		"damage": {
			"physical": 44
		},
		"attributes": {
			"intelligence": {
				"scaling": "C",
				"required": 18
			}
		},
		"appearance": "gold hoe",
		"lore": "A staff enchanted with a poisonous spell. Seems to have been summoned from another world.",
		"status": {
			"poison": 11
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1104",
		"name": "Brand of the Abyss",
		"displayname": "&6Brand of the Abyss",
		"swing": {
			"class": "Heavy",
			"range": 4,
			"weight": 36
		},
		"damage": {
			"fire": 14,
			"physical": 36
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 12
			},
			"dexterity": {
				"scaling": "D",
				"required": 12
			},
			"strength": {
				"scaling": "D",
				"required": 12
			}
		},
		"appearance": "glowing blaze rod",
		"special": {
			"effect": "Inflicts High Stagger",
			"stamina_damage": -1
		},
		"lore": "A sizzling poker that brands victims with the symbol of the Abyss.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1103",
		"name": "Spire Scythe",
		"displayname": "&6Spire Scythe",
		"swing": {
			"class": "Heavy",
			"range": 2,
			"weight": 38
		},
		"damage": {
			"earth": 36,
			"fire": 30,
			"physical": 10
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 24
			},
			"dexterity": {
				"scaling": "D",
				"required": 16
			}
		},
		"appearance": "glowing wood hoe",
		"lore": "A scythe wielded by a being who hunted those lost in the dark.",
		"special": {
			"shield_piercing": 0.5
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1102",
		"name": "Illusory Wand",
		"displayname": "&6Illusory Wand",
		"swing": {
			"class": "Very Light",
			"range": 2,
			"weight": 12
		},
		"damage": {
			"wind": 10,
			"physical": 10
		},
		"attributes": {
			"intelligence": {
				"scaling": "B",
				"required": 30
			},
			"dexterity": {
				"scaling": "E",
				"required": 6
			}
		},
		"appearance": "glowing stick",
		"lore": "A wand granted to witches who studied under the master illusionist.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1101",
		"name": "Sentinel Pike",
		"displayname": "&6Sentinel Pike",
		"swing": {
			"class": "Heavy",
			"range": 4,
			"weight": 42
		},
		"damage": {
			"physical": 62
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 30
			}
		},
		"appearance": "iron shovel",
		"lore": "A pike once wielded by the gatekeepers of Alendale, depicted in the statues seen in the castle gardens. This one in particlar has seen exemplary upkeep and is in pristine condition.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1100",
		"name": "Scalpel",
		"displayname": "&6Scalpel",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 34
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 28
			}
		},
		"appearance": "wood sword",
		"lore": "An unsanitary scalpel wielded by one would take advantage of the pygmys' plight to use their corpses in medical research.",
		"status": {
			"poison": 10,
			"bleed": 6
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1099",
		"name": "Fusion Blade",
		"displayname": "&6Fusion Blade",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 18
		},
		"damage": {
			"physical": 46
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 18
			},
			"strength": {
				"scaling": "C",
				"required": 18
			}
		},
		"appearance": "glowing gold sword",
		"lore": "An enchanted blade that packs quite a punch despite its suspiciously low weight.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1098",
		"name": "Bone Club",
		"displayname": "&6Bone Club",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 28
			}
		},
		"appearance": "bone",
		"lore": "A bone with no special powers that nonetheless causes devastating damage against shields.",
		"special": {
			"stamina_damage": 4
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1097",
		"name": "Black Knight Greataxe",
		"displayname": "&6Black Knight Greataxe",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 66
		},
		"damage": {
			"fire": 18,
			"physical": 50
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 16
			},
			"strength": {
				"scaling": "A",
				"required": 40
			}
		},
		"appearance": "glowing stone axe",
		"lore": "A tremendously powerful yet heavy greataxe wielded by legendary soldiers charred by flame.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1096",
		"name": "Assassin Dagger",
		"displayname": "&6Assassin Dagger",
		"swing": {
			"crit": 2.5,
			"class": "Very Light",
			"range": 2,
			"weight": 16
		},
		"damage": {
			"physical": 28
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 30
			}
		},
		"appearance": "glowing wood sword",
		"special": {
			"effect": "Increases Poison Damage"
		},
		"lore": "A toxin coated blade wielded by assassins.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"poison": 7
		}
	},
	{
		"id": "1095",
		"name": "Sculpting Chisel",
		"displayname": "&6Sculpting Chisel",
		"swing": {
			"crit": 1.3,
			"class": "Light",
			"range": 3,
			"weight": 14
		},
		"damage": {
			"physical": 25
		},
		"attributes": {
			"intelligence": {
				"required": 6
			},
			"dexterity": {
				"scaling": "A",
				"required": 20
			}
		},
		"appearance": "glowing stone sword",
		"special": {
			"skill": "rejuvenate"
		},
		"lore": "A chisel wielded by the apprentice of the Sculptor. Its skill can be used to heal a player who has summoned you.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1094",
		"name": "Parrying Dagger",
		"displayname": "&6Parrying Dagger",
		"swing": {
			"crit": 2,
			"class": "Very Light",
			"range": 2,
			"weight": 14
		},
		"damage": {
			"physical": 35
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 7
			}
		},
		"appearance": "wooden sword",
		"lore": "A light dagger typically wielded in the off hand. Can be used to parry with.",
		"special": {
			"parry_window": 1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1093",
		"name": "Large Branch",
		"displayname": "&6Large Branch",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 38
		},
		"damage": {
			"physical": 62
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 3
			}
		},
		"appearance": "stick",
		"lore": "Nothing more than a larger than average stick found in the woods.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1092",
		"name": "Staff",
		"displayname": "&6Staff",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 55
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 5
			}
		},
		"appearance": "gold hoe",
		"lore": "A staff that channels the wielder's intelligence.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1091",
		"name": "Bandit Knife",
		"displayname": "&6Bandit Knife",
		"swing": {
			"crit": 2.5,
			"class": "Very Light",
			"range": 2,
			"weight": 14
		},
		"damage": {
			"physical": 24
		},
		"attributes": {
			"dexterity": {
				"scaling": "A",
				"required": 10
			}
		},
		"appearance": "wooden sword",
		"lore": "An easily concealed knife commonly wielded by bandits.",
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1090",
		"name": "Adventurer's Staff",
		"displayname": "&6Adventurer's Staff",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 32
		},
		"attributes": {
			"dexterity": {
				"scaling": "A",
				"required": 10
			},
			"strength": {
				"scaling": "A",
				"required": 10
			}
		},
		"appearance": "glowing stick",
		"special": {
			"effect": "Reduces Sprint Stamina Cost"
		},
		"lore": "A staff filled with the spirit of adventure. Incredibly effective when used in the hands of an experienced warrior.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1089",
		"name": "Staff of Judgment",
		"displayname": "&6Staff of Judgment",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 30
		},
		"damage": {
			"physical": 30
		},
		"attributes": {
			"intelligence": {
				"scaling": "S",
				"required": 30
			}
		},
		"appearance": "glowing gold hoe",
		"special": {
			"skill": "animaShot"
		},
		"lore": "A staff used by a nameless god to pass judgment on humanity, deemed unworthy of existence.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1088",
		"name": "Essence Spear",
		"displayname": "&6Essence Spear",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 18
		},
		"damage": {
			"physical": 80
		},
		"attributes": {
			"dexterity": {
				"required": 40
			}
		},
		"appearance": "glowing diamond shovel",
		"special": {
			"effect": "Charged Attacks Fire Anima",
			"stamina_damage": -1
		},
		"lore": "An incorporeal spear wielded by a lost soul. Denied Eden, they are doomed to wander the Abyss for eternity.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1087",
		"name": "Essence Staff",
		"displayname": "&6Essence Staff",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 10
		},
		"damage": {
			"physical": 55
		},
		"attributes": {
			"intelligence": {
				"required": 40
			}
		},
		"appearance": "glowing diamond hoe",
		"special": {
			"effect": "Charged Attacks Fire Anima"
		},
		"lore": "An incorporeal staff wielded by a lost soul. Denied Eden, they are doomed to wander the Abyss for eternity.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1086",
		"name": "Essence Blade",
		"displayname": "&6Essence Blade",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 16
		},
		"damage": {
			"physical": 100
		},
		"attributes": {
			"dexterity": {
				"required": 25
			},
			"strength": {
				"required": 25
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"effect": "Charged Attacks Fire Anima"
		},
		"lore": "An incorporeal sword wielded by a lost soul. Denied Eden, they are doomed to wander the Abyss for eternity.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1085",
		"name": "Essence Axe",
		"displayname": "&6Essence Axe",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 160
		},
		"attributes": {
			"strength": {
				"required": 40
			}
		},
		"appearance": "glowing diamond axe",
		"special": {
			"effect": "Charged Attacks Fire Anima"
		},
		"lore": "An incorporeal axe wielded by a lost soul. Denied Eden, they are doomed to wander the Abyss for eternity.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1084",
		"name": "Phantasm Blade II",
		"displayname": "&6Phantasm Blade II",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"wind": 24,
			"physical": 40
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 12
			},
			"dexterity": {
				"scaling": "C",
				"required": 16
			},
			"strength": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"skill": "phantasmSwap2"
		},
		"lore": "A blade of light extending from an enchanted hilt, wielded by the ruler of Phantasmagoria.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1083",
		"name": "Phantasm Blade I",
		"displayname": "&6Phantasm Blade I",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 24
		},
		"damage": {
			"wind": 15,
			"physical": 25
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 12
			},
			"dexterity": {
				"scaling": "C",
				"required": 16
			},
			"strength": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"skill": "phantasmSwap1"
		},
		"lore": "A blade of light extending from an enchanted hilt, wielded by the ruler of Phantasmagoria.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1082",
		"name": "Skylark Staff",
		"displayname": "&6Skylark Staff",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"wind": 35,
			"physical": 35
		},
		"attributes": {
			"intelligence": {
				"scaling": "A",
				"required": 30
			},
			"strength": {
				"scaling": "E",
				"required": 8
			}
		},
		"appearance": "glowing gold hoe",
		"lore": "A heavy, wind enchanted staff adorned with the image of a skylark.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1081",
		"name": "Butler Baton",
		"displayname": "&6Butler Baton",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 36
		},
		"damage": {
			"physical": 78
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 22
			}
		},
		"appearance": "blaze rod",
		"lore": "A baton wielded by servants in Phantasmagoria to disorient intruders.",
		"status": {
			"confusion": 9
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1080",
		"name": "Butcher's Knife",
		"displayname": "&6Butcher's Knife",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 20
		},
		"damage": {
			"physical": 32
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 8
			}
		},
		"appearance": "wood sword",
		"special": {
			"effect": "Repeated Attacks Regenerate HP"
		},
		"lore": "A large knife used to tear apart flesh.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1079",
		"name": "Jewel Encrusted Sword",
		"displayname": "&6Jewel Encrusted Sword",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 35
		},
		"damage": {
			"wind": 5,
			"earth": 5,
			"water": 5,
			"fire": 5,
			"physical": 30
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 14
			},
			"strength": {
				"scaling": "C",
				"required": 14
			}
		},
		"appearance": "glowing gold sword",
		"lore": "An ornamental golden sword adorned with various expensive jewelry.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1078",
		"name": "Bone Fragment",
		"displayname": "&6Bone Fragment",
		"swing": {
			"class": "Very Light",
			"range": 1,
			"weight": 8
		},
		"damage": {
			"physical": 22
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 3
			}
		},
		"appearance": "bone",
		"lore": "A shattered fragment of a former inmate's skeleton.",
		"special": {
			"stamina_damage": -2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1077",
		"name": "Estoc",
		"displayname": "&6Estoc",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 26
		},
		"damage": {
			"physical": 42
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 18
			},
			"strength": {
				"scaling": "D",
				"required": 12
			}
		},
		"appearance": "iron sword",
		"lore": "A light fencing blade that requires much training to use effectively.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1076",
		"name": "Rotting Bat",
		"displayname": "&6Rotting Bat",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 36
		},
		"damage": {
			"physical": 72
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 19
			}
		},
		"appearance": "stick",
		"lore": "A bat laced with poison wielded by the villainous caretakers of Phantasmagoria.",
		"status": {
			"poison": 15
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1075",
		"name": "Phantasm Scythe",
		"displayname": "&6Phantasm Scythe",
		"swing": {
			"class": "Light",
			"range": 2,
			"weight": 22
		},
		"damage": {
			"wind": 12,
			"physical": 24
		},
		"attributes": {
			"dexterity": {
				"scaling": "S",
				"required": 24
			}
		},
		"appearance": "glowing diamond hoe",
		"lore": "An illusory scythe wielded by the incorporeal essences left behind in the halls of Phantasmagoria.",
		"special": {
			"shield_piercing": 0.5
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1074",
		"name": "Beheading Axe",
		"displayname": "&6Beheading Axe",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 20
			}
		},
		"appearance": "stone axe",
		"lore": "An axe that was used to execute prisoners and test subjects.",
		"status": {
			"bleed": 11
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1073",
		"name": "Zweihander",
		"displayname": "&6Zweihander",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 44
		},
		"damage": {
			"physical": 72
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 20
			}
		},
		"appearance": "iron sword",
		"lore": "A gigantic two-handed sword wielded by legendary warriors.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1072",
		"name": "Left Claw",
		"displayname": "&6Left Claw",
		"swing": {
			"crit": 2,
			"class": "Very Light",
			"range": 2,
			"weight": 12
		},
		"damage": {
			"physical": 20
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 16
			}
		},
		"appearance": "wood hoe",
		"lore": "A jagged, insect-like claw wielded in the off hand.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"bleed": 7
		},
		"special": {}
	},
	{
		"id": "1071",
		"name": "Right Claw",
		"displayname": "&6Right Claw",
		"swing": {
			"crit": 1.5,
			"class": "Light",
			"range": 2,
			"weight": 20
		},
		"damage": {
			"physical": 30
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 16
			}
		},
		"appearance": "wood hoe",
		"special": {
			"skill": "raptorFury"
		},
		"lore": "A jagged, insect-like claw wielded in the main hand. Can perform a devastating series of blows when wielded together with the left claw.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"bleed": 9
		}
	},
	{
		"id": "1070",
		"name": "Ice Axe",
		"displayname": "&6Ice Axe",
		"swing": {
			"class": "Very Heavy",
			"range": 2,
			"weight": 50
		},
		"damage": {
			"water": 65,
			"physical": 65
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 24
			}
		},
		"appearance": "glowing iron axe",
		"lore": "A large and unwieldly axe that has been completely frozen over.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1069",
		"name": "Templar Greatsword",
		"displayname": "&6Templar Greatsword",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 46
		},
		"damage": {
			"physical": 77
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 20
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"skill": "dragonRush"
		},
		"lore": "A sword used by the Templars that protected the priestesses against those who wished to put an end to their holy ceremony.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1068",
		"name": "Frostbite Staff",
		"displayname": "&6Frostbite Staff",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 24
		},
		"damage": {
			"water": 15,
			"physical": 15
		},
		"attributes": {
			"intelligence": {
				"scaling": "A",
				"required": 20
			}
		},
		"appearance": "glowing iron hoe",
		"special": {
			"skill": "frostWalk"
		},
		"lore": "A staff wielded by the Queen and Head Priestess Shiva who governed a sanctuary dedicated to creating a vessel for god.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1067",
		"name": "Great Hammer",
		"displayname": "&6Great Hammer",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 70
		},
		"damage": {
			"physical": 85
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 12
			}
		},
		"appearance": "iron pickaxe",
		"lore": "An impossibly heavy hammer used by the constructs that served the queen of Darkwater Sanctum.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1066",
		"name": "Icicle",
		"displayname": "&6Icicle",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 20
		},
		"damage": {
			"physical": 64
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 8
			}
		},
		"appearance": "blaze rod",
		"lore": "A sharp sliver of ice that can be swung around to slash at enemies.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1065",
		"name": "Ice Blade",
		"displayname": "&6Ice Blade",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"water": 30,
			"physical": 30
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 8
			},
			"dexterity": {
				"scaling": "D",
				"required": 8
			}
		},
		"appearance": "glowing iron sword",
		"lore": "An iron sword completely frozen over with unnaturally cold ice.",
		"status": {
			"slow": 9
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1064",
		"name": "Sculpting Knife",
		"displayname": "&6Sculpting Knife",
		"swing": {
			"crit": 1.3,
			"class": "Very Light",
			"range": 3,
			"weight": 14
		},
		"damage": {
			"physical": 22
		},
		"attributes": {
			"dexterity": {
				"scaling": "S",
				"required": 30
			}
		},
		"appearance": "glowing stone sword",
		"special": {
			"effect": "Bonus Damage VS Wooden Enemies"
		},
		"lore": "A very long knife once used by the Sculptor to create masses of idols to spread the influence of the Abyss.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1063",
		"name": "Primal Spear",
		"displayname": "&6Primal Spear",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 32
		},
		"damage": {
			"physical": 38
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 18
			}
		},
		"appearance": "gold shovel",
		"lore": "A dull spear coated in a numbing gel intended to paralyze its targets.",
		"special": {
			"stamina_damage": -1
		},
		"status": {
			"slow": 6
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1062",
		"name": "Idol Axe",
		"displayname": "&6Idol Axe",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 60
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 40
			}
		},
		"appearance": "wooden axe",
		"lore": "A mass produced axe used by the multitude of idols created by the Sculptor.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1061",
		"name": "Machete",
		"displayname": "&6Machete",
		"swing": {
			"class": "Light",
			"range": 2,
			"weight": 20
		},
		"damage": {
			"physical": 54
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 14
			}
		},
		"appearance": "gold sword",
		"lore": "A short, incredibly sharp knife that can be wielded in combat like a sword.",
		"status": {
			"bleed": 10
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1060",
		"name": "Jewel Crusher",
		"displayname": "&6Jewel Crusher",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"earth": 50,
			"physical": 50
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 12
			}
		},
		"appearance": "diamond shovel",
		"lore": "A jagged, jewel adorned mace. Wielded by guardians sent to watch over the Sculptor by a shrewd Darkwater magistrate.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1059",
		"name": "Dirk",
		"displayname": "&6Dirk",
		"swing": {
			"crit": 1.25,
			"class": "Very Light",
			"range": 2,
			"weight": 16
		},
		"damage": {
			"physical": 32
		},
		"attributes": {
			"dexterity": {
				"scaling": "A",
				"required": 20
			}
		},
		"appearance": "iron sword",
		"lore": "A long, single-bladed thrusting dagger. Deals higher damage than other comparable weapons, but lacks a strong critical attack.",
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1058",
		"name": "Rending Axe",
		"displayname": "&6Rending Axe",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 52
		},
		"damage": {
			"physical": 175
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 40
			}
		},
		"appearance": "stone axe",
		"lore": "A monstrous, misshapen stone axe. The mere sight of this axe strikes primal fear into the hearts of opponents.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1057",
		"name": "Willow Club",
		"displayname": "&6Willow Club",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"wind": 15,
			"physical": 45
		},
		"attributes": {
			"intelligence": {
				"scaling": "E",
				"required": 6
			},
			"strength": {
				"scaling": "C",
				"required": 10
			}
		},
		"appearance": "stick",
		"lore": "A club crafted from the willows of the Illusory Forest. Retains traces of wind magic.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1056",
		"name": "Gladius",
		"displayname": "&6Gladius",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 46
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 16
			},
			"strength": {
				"scaling": "B",
				"required": 16
			}
		},
		"appearance": "glowing gold sword",
		"special": {
			"skill": "impalingThrust"
		},
		"lore": "The Champion of Leere's weapon of choice. His roaring battle cries struck fear into the hearts of his opponents.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1055",
		"name": "Cursed Greatsword",
		"displayname": "&6Cursed Greatsword",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"physical": 94
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 12
			},
			"strength": {
				"scaling": "C",
				"required": 20
			}
		},
		"appearance": "glowing diamond sword",
		"special": {
			"skill": "emitGas"
		},
		"lore": "An abyssal greatsword that was the signature blade of the second champion of Dysmere.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1054",
		"name": "Primordial Bone",
		"displayname": "&6Primordial Bone",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 36
		},
		"damage": {
			"physical": 78
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 20
			}
		},
		"appearance": "bone",
		"special": {
			"skill": "shockwave",
			"stamina_damage": 2
		},
		"lore": "A fossil of an ancient creature that is heavy enough to be wielded as a club.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"slow": 10
		}
	},
	{
		"id": "1053",
		"name": "Warpick",
		"displayname": "&6Warpick",
		"swing": {
			"class": "Heavy",
			"range": 2,
			"weight": 42
		},
		"damage": {
			"earth": 16,
			"physical": 50
		},
		"attributes": {
			"strength": {
				"scaling": "A",
				"required": 14
			}
		},
		"appearance": "stone pickaxe",
		"special": {
			"effect": "Attacks Ignore Shield Stability"
		},
		"lore": "A pickaxe that has been modified to make it more effective in combat.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1052",
		"name": "Nail Bat",
		"displayname": "&6Nail Bat",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"physical": 74
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 10
			}
		},
		"appearance": "stick",
		"lore": "A makeshift weapon created by embedding various nails and sharp objects into a piece of wood.",
		"status": {
			"bleed": 11
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1051",
		"name": "Shovel",
		"displayname": "&6Shovel",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"physical": 46
		},
		"attributes": {
			"dexterity": {
				"scaling": "S",
				"required": 12
			}
		},
		"appearance": "iron shovel",
		"lore": "A shovel used by miners in Dysmere. Not originally intended for use as a weapon; however, with great dexterity, it can still cause destruction.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1050",
		"name": "Longsword",
		"displayname": "&6Longsword",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"physical": 58
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 7
			},
			"strength": {
				"scaling": "C",
				"required": 7
			}
		},
		"appearance": "iron sword",
		"lore": "A sword that is easily wielded and useful in all manner of situations.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1049",
		"name": "Rapier",
		"displayname": "&6Rapier",
		"swing": {
			"crit": 1.5,
			"class": "Light",
			"range": 3,
			"weight": 24
		},
		"damage": {
			"physical": 40
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 12
			},
			"strength": {
				"scaling": "E",
				"required": 6
			}
		},
		"appearance": "stone sword",
		"lore": "A small sword with a pointed blade that is commonly used as a sidearm. Can be used to parry with.",
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1048",
		"name": "Flamberge",
		"displayname": "&6Flamberge",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"physical": 64
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 8
			},
			"strength": {
				"scaling": "C",
				"required": 8
			}
		},
		"appearance": "gold sword",
		"lore": "A greatsword with an undulating blade.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1047",
		"name": "Gremlin Dagger",
		"displayname": "&6Gremlin Dagger",
		"swing": {
			"crit": 1.5,
			"class": "Very Light",
			"range": 2,
			"weight": 18
		},
		"damage": {
			"physical": 42
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 10
			}
		},
		"appearance": "wooden sword",
		"lore": "A dagger that has been given a poisonous effect from the treacherous toxins in the Pits.",
		"status": {
			"poison": 8
		},
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1046",
		"name": "Hexing Staff",
		"displayname": "&6Hexing Staff",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 32
		},
		"damage": {
			"physical": 32
		},
		"attributes": {
			"intelligence": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "gold hoe",
		"lore": "A staff that has been cursed by a debilitating incantation.",
		"status": {
			"confusion": 4,
			"petrify": 4,
			"slow": 4,
			"bleed": 4,
			"poison": 4
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1045",
		"name": "Flaming Ent Branch",
		"displayname": "&6Flaming Ent Branch",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"fire": 70,
			"physical": 70
		},
		"attributes": {
			"strength": {
				"required": 12
			}
		},
		"appearance": "stick",
		"lore": "A large appendage cut from the body of a Flaming Ent that can be swung around with great force.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1044",
		"name": "Demon's Spear",
		"displayname": "&6Demon's Spear",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 35
		},
		"damage": {
			"physical": 75
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 30
			}
		},
		"appearance": "glowing blaze rod",
		"special": {
			"skill": "spearCharge"
		},
		"lore": "A thin pole carved out of igneous rock with a molten crystal welded onto the tip.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1043",
		"name": "Demon's Scythe",
		"displayname": "&6Demon's Scythe",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"physical": 85
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 15
			},
			"strength": {
				"scaling": "E",
				"required": 15
			}
		},
		"appearance": "glowing diamond hoe",
		"special": {
			"skill": "bloodBlessing",
			"shield_piercing": 0.75
		},
		"lore": "A jagged, unearthly scythe that owes its deformation to long exposure to blistering heat. The former weapon of choice of the disgraced champion of Dysmere. Its skill coats the weapon in the wielder's own blood.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"bleed": 4
		}
	},
	{
		"id": "1042",
		"name": "Demon's Great Hammer",
		"displayname": "&6Demon's Great Hammer",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 53
		},
		"damage": {
			"physical": 165
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 30
			}
		},
		"appearance": "glowing diamond axe",
		"special": {
			"skill": "flamePlunge"
		},
		"lore": "A crudely cut slab of crystal that can be wielded like a hammer. Use its skill midair to perform a devastating plunge.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1041",
		"name": "Frenzied Club",
		"displayname": "&6Frenzied Club",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 46
		},
		"damage": {
			"physical": 92
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 16
			}
		},
		"appearance": "glowing stick",
		"lore": "An obsidian stalactite that can be wielded as a club.",
		"status": {
			"confusion": 12
		},
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1040",
		"name": "Firebane",
		"displayname": "&6Firebane",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 42
		},
		"damage": {
			"fire": 42,
			"physical": 42
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 10
			},
			"strength": {
				"scaling": "D",
				"required": 10
			}
		},
		"appearance": "glowing gold sword",
		"lore": "A greatsword with a blade covered in molten lava, this weapon slices through the defenses of most living creatures.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1039",
		"name": "Crimson Greatsword",
		"displayname": "&6Crimson Greatsword",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 42
		},
		"damage": {
			"physical": 44
		},
		"attributes": {
			"strength": {
				"scaling": "S",
				"required": 20
			}
		},
		"appearance": "glowing wood sword",
		"lore": "A powerful greatsword wielded by the Crimson Warriors. It bashes through shields and causes bleeding in its victims.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"bleed": 14
		}
	},
	{
		"id": "1038",
		"name": "Crimson Straight Sword",
		"displayname": "&6Crimson Straight Sword",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 22
		},
		"damage": {
			"physical": 28
		},
		"attributes": {
			"dexterity": {
				"scaling": "S",
				"required": 20
			}
		},
		"appearance": "glowing wood sword",
		"lore": "A light weapon wielded by the Crimson Warriors. Its rending attacks tear apart its victims.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"bleed": 9
		}
	},
	{
		"id": "1037",
		"name": "Sunlight Greatsword",
		"displayname": "&6Sunlight Greatsword",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 36
		},
		"damage": {
			"fire": 20,
			"physical": 54
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 8
			},
			"strength": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "glowing gold sword",
		"lore": "A powerful weapon wielded by the Sunlight Warriors. Its heavy attacks bash through the defenses of invaders.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1036",
		"name": "Sunlight Straight Sword",
		"displayname": "&6Sunlight Straight Sword",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 26
		},
		"damage": {
			"fire": 13,
			"physical": 37
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 8
			},
			"dexterity": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "glowing gold sword",
		"lore": "A light weapon wielded by the Sunlight Warriors. Its quick attacks keep invaders at bay.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1035",
		"name": "Bloodlust",
		"displayname": "&6Bloodlust",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 27
		},
		"damage": {
			"physical": 38
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 20
			}
		},
		"appearance": "glowing wood sword",
		"special": {
			"skill": "slashCombo"
		},
		"lore": "A cursed katana that was the signature blade of the first champion of Dysmere.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"bleed": 9
		}
	},
	{
		"id": "1034",
		"name": "Pickaxe",
		"displayname": "&6Pickaxe",
		"swing": {
			"class": "Very Heavy",
			"range": 2,
			"weight": 44
		},
		"damage": {
			"physical": 56
		},
		"attributes": {
			"strength": {
				"scaling": "S",
				"required": 28
			}
		},
		"appearance": "iron pickaxe",
		"special": {
			"effect": "Attacks Ignore Shield Stability"
		},
		"lore": "A pickaxe used by the miners from Dysmere. Not originally intended for use as a weapon; however, its piercing properties allow it to crack open even the mightiest of shields.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1033",
		"name": "Scimitar",
		"displayname": "&6Scimitar",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 26
		},
		"damage": {
			"physical": 46
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "stone sword",
		"lore": "A short sword with a curved blade that can cause mild bleeding. Can be used to parry with.",
		"special": {
			"parry_window": -1
		},
		"status": {
			"bleed": 8
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1032",
		"name": "Hunter Spear",
		"displayname": "&6Hunter Spear",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 35
		},
		"damage": {
			"physical": 40
		},
		"attributes": {
			"dexterity": {
				"scaling": "A",
				"required": 18
			}
		},
		"appearance": "stone shovel",
		"lore": "An long spear used by hunters to attack quick foes from a distance. Requires high dexterity to wield effectively.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1031",
		"name": "Serrated Knife",
		"displayname": "&6Serrated Knife",
		"swing": {
			"crit": 1.5,
			"class": "Very Light",
			"range": 2,
			"weight": 18
		},
		"damage": {
			"physical": 28
		},
		"attributes": {
			"dexterity": {
				"scaling": "B",
				"required": 14
			}
		},
		"appearance": "wooden sword",
		"lore": "A knife with a serrated blade used by hunters to cut meat.",
		"status": {
			"bleed": 7
		},
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1030",
		"name": "Lumberjack Axe",
		"displayname": "&6Lumberjack Axe",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"physical": 90
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 15
			}
		},
		"appearance": "stone axe",
		"special": {
			"effect": "Bonus Damage VS Wooden Enemies"
		},
		"lore": "A sturdy lumberjack's axe that was used to fell trees.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1029",
		"name": "Tomahawk",
		"displayname": "&6Tomahawk",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 26
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 14
			}
		},
		"appearance": "iron axe",
		"special": {
			"skill": "throw"
		},
		"lore": "A light throwing axe wielded by the former Bandit Lord.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1028",
		"name": "Pike",
		"displayname": "&6Pike",
		"swing": {
			"class": "Heavy",
			"range": 4,
			"weight": 40
		},
		"damage": {
			"physical": 58
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 12
			}
		},
		"appearance": "iron shovel",
		"lore": "A pike once wielded by the sentinels of Alendale, depicted in the statues seen in the castle gardens.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1027",
		"name": "Guardian Arm",
		"displayname": "&6Guardian Arm",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 52
		},
		"damage": {
			"physical": 84
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 16
			}
		},
		"appearance": "glowing stick",
		"lore": "A giant slab of iron cut from the body of a Guardian.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1026",
		"name": "Crypt Pike",
		"displayname": "&6Crypt Pike",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 34
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 9
			},
			"strength": {
				"scaling": "E",
				"required": 5
			}
		},
		"appearance": "stone shovel",
		"lore": "An occult spear wielded by ancient corpses who were animated by the Necromancers.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1025",
		"name": "Flowering Ent Branch",
		"displayname": "&6Flowering Ent Branch",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"physical": 126
		},
		"attributes": {
			"strength": {
				"required": 12
			}
		},
		"appearance": "stick",
		"lore": "A large appendage cut from the body of a Flowering Ent that can be swung around with great force.",
		"status": {
			"poison": 15
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1024",
		"name": "Ent Branch",
		"displayname": "&6Ent Branch",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"physical": 140
		},
		"attributes": {
			"strength": {
				"required": 12
			}
		},
		"appearance": "stick",
		"lore": "A large appendage cut from the body of an Ent that can be swung around with great force.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1023",
		"name": "King's Greatsword",
		"displayname": "&6King's Greatsword",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 53
		},
		"damage": {
			"physical": 74
		},
		"attributes": {
			"strength": {
				"scaling": "S",
				"required": 60
			}
		},
		"appearance": "iron sword",
		"special": {
			"effect": "Charged Attacks Leave Damaging Shockwaves"
		},
		"lore": "A legendary weapon said to have been wielded by an ancient hero of Alendale.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1022",
		"name": "Ice Hammer",
		"displayname": "&6Ice Hammer",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 50
		},
		"damage": {
			"water": 30,
			"physical": 60
		},
		"attributes": {
			"intelligence": {
				"scaling": "D",
				"required": 8
			},
			"strength": {
				"scaling": "C",
				"required": 16
			}
		},
		"appearance": "glowing iron pickaxe",
		"special": {
			"skill": "earthShaker",
			"effect": "Shatters Cracked Ice Walls"
		},
		"lore": "An enchanted great hammer wielded by the final construct model employed by Darkwater.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1021",
		"name": "Fungal Blade",
		"displayname": "&6Fungal Blade",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 24
		},
		"damage": {
			"physical": 44
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 8
			}
		},
		"appearance": "stone sword",
		"lore": "A stone blade that has been coated in a fungal extract that causes a mild form of paralysis.",
		"status": {
			"slow": 6
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1020",
		"name": "Fungal Axe",
		"displayname": "&6Fungal Axe",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 40
		},
		"damage": {
			"physical": 62
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 8
			}
		},
		"appearance": "stone axe",
		"lore": "A stone axe that has been coated in a fungal extract that causes a mild form of paralysis.",
		"status": {
			"slow": 11
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1019",
		"name": "Stone Mace",
		"displayname": "&6Stone Mace",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 30
		},
		"damage": {
			"earth": 15,
			"physical": 40
		},
		"attributes": {
			"strength": {
				"scaling": "B",
				"required": 10
			}
		},
		"appearance": "stone shovel",
		"lore": "A mace wielded by crude golems that served as the first prototypes for the constructs that would come to dominate the Darkwater civilization.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1018",
		"name": "Hollow Slayer",
		"displayname": "&6Hollow Slayer",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"earth": 12,
			"physical": 40
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 16
			},
			"strength": {
				"scaling": "D",
				"required": 8
			}
		},
		"appearance": "iron sword",
		"special": {
			"skill": "backstep"
		},
		"lore": "A jagged blade wielded by the final king of Alendale. While the Darkwater and Pygmy civilizations left behind a legacy, Alendale disappeared without a trace.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		},
		"status": {
			"bleed": 12
		}
	},
	{
		"id": "1017",
		"name": "Necromancer's Scythe",
		"displayname": "&6Necromancer's Scythe",
		"swing": {
			"class": "Heavy",
			"range": 2,
			"weight": 42
		},
		"damage": {
			"fire": 35,
			"physical": 35
		},
		"attributes": {
			"intelligence": {
				"scaling": "A",
				"required": 10
			},
			"strength": {
				"scaling": "E",
				"required": 5
			}
		},
		"appearance": "stone hoe",
		"lore": "A heavy scythe infused with fire. Wielded by scouts of Illusion who ventured to Leere in search of bodies suitable for research.",
		"special": {
			"shield_piercing": 0.5
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1016",
		"name": "Crypt Blade",
		"displayname": "&6Crypt Blade",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 26
		},
		"damage": {
			"physical": 52
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 6
			}
		},
		"appearance": "stone sword",
		"lore": "An occult sword wielded by corpses animated by the Necromancers.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1015",
		"name": "Reaper Scythe",
		"displayname": "&6Reaper Scythe",
		"swing": {
			"class": "Medium",
			"range": 2,
			"weight": 30
		},
		"damage": {
			"earth": 15,
			"physical": 45
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 4
			},
			"strength": {
				"scaling": "B",
				"required": 8
			}
		},
		"appearance": "iron hoe",
		"lore": "A ghastly scythe that reaps souls. Scythes have exceptional damage and pierce through shields, but suffer from short range.",
		"special": {
			"shield_piercing": 0.5
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1014",
		"name": "False God Axe",
		"displayname": "&6False God Axe",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 52
		},
		"damage": {
			"physical": 100
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 20
			}
		},
		"appearance": "glowing wooden axe",
		"special": {
			"skill": "sweepCircle"
		},
		"lore": "An axe once wielded by the vessel worshipped by the Pygmies of the Great Hollow.",
		"upgrading": {
			"material": 1,
			"base_scaling": 0.2,
			"type": 1
		}
	},
	{
		"id": "1013",
		"name": "Splintering Knife",
		"displayname": "&6Splintering Knife",
		"swing": {
			"crit": 1.5,
			"class": "Very Light",
			"range": 2,
			"weight": 18
		},
		"damage": {
			"physical": 34
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 8
			}
		},
		"appearance": "wooden sword",
		"lore": "A poorly made knife forged with various twigs found in the Great Hollow. The splinters in its blade can cause bleeding in foes, causing immense damage once inflicted.",
		"status": {
			"bleed": 7
		},
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1012",
		"name": "Stump Axe",
		"displayname": "&6Stump Axe",
		"swing": {
			"class": "Very Heavy",
			"range": 2,
			"weight": 52
		},
		"damage": {
			"physical": 140
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 12
			}
		},
		"appearance": "wooden axe",
		"lore": "An axe forged out of a gnarled stump in the Great Hollow. Terribly destructive, even with low amounts of strength.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1011",
		"name": "Wooden Spear",
		"displayname": "&6Wooden Spear",
		"swing": {
			"class": "Medium",
			"range": 4,
			"weight": 30
		},
		"damage": {
			"physical": 48
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 5
			},
			"strength": {
				"scaling": "D",
				"required": 5
			}
		},
		"appearance": "wooden shovel",
		"lore": "A spear forged out of the wood in the Great Hollow. Spears have increased range, but deal less stamina damage against guarding foes.",
		"special": {
			"stamina_damage": -1
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1010",
		"name": "Katana",
		"displayname": "&6Katana",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 24
		},
		"damage": {
			"physical": 52
		},
		"attributes": {
			"dexterity": {
				"scaling": "C",
				"required": 12
			}
		},
		"appearance": "wooden sword",
		"lore": "A katana forged out of the wood in the Great Hollow. A quick weapon that scales well with dexterity.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1009",
		"name": "Great Club",
		"displayname": "&6Great Club",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 48
		},
		"damage": {
			"physical": 108
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 10
			}
		},
		"appearance": "stick",
		"lore": "A giant tree branch that can be swung around as a club.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1008",
		"name": "Poisoned Knife",
		"displayname": "&6Poisoned Knife",
		"swing": {
			"crit": 2.5,
			"class": "Very Light",
			"range": 2,
			"weight": 14
		},
		"damage": {
			"physical": 28
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 6
			}
		},
		"appearance": "wooden sword",
		"lore": "A knife that has accumulated poison from toxins in the mushrooms growing throughout the Great Hollow. Causes its victims to take damage over time.",
		"status": {
			"poison": 7
		},
		"special": {},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1007",
		"name": "Wooden Club",
		"displayname": "&6Wooden Club",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 34
		},
		"damage": {
			"physical": 60
		},
		"attributes": {
			"strength": {
				"scaling": "C",
				"required": 5
			}
		},
		"appearance": "stick",
		"lore": "A wooden club fashioned out of a large branch. Clubs deal bonus stamina damage against guarding foes.",
		"special": {
			"stamina_damage": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1006",
		"name": "Broken Sword",
		"displayname": "&6Broken Sword",
		"swing": {
			"class": "Medium",
			"range": 2,
			"weight": 28
		},
		"damage": {
			"physical": 26
		},
		"attributes": {
			"strength": {
				"scaling": "E",
				"required": 2
			}
		},
		"appearance": "stone sword",
		"lore": "A sword that's been broken in half. In its current state, it's nearly impossible to tell what sort of blade it was.",
		"status": {
			"bleed": 2
		},
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1005",
		"name": "Greataxe",
		"displayname": "&6Greataxe",
		"swing": {
			"class": "Very Heavy",
			"range": 3,
			"weight": 44
		},
		"damage": {
			"physical": 100
		},
		"attributes": {
			"strength": {
				"scaling": "D",
				"required": 8
			}
		},
		"appearance": "iron axe",
		"lore": "An unwieldly axe that takes above average strength to swing effectively.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1004",
		"name": "Iron Mace",
		"displayname": "&6Iron Mace",
		"swing": {
			"class": "Heavy",
			"range": 3,
			"weight": 36
		},
		"damage": {
			"physical": 80
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 2
			},
			"strength": {
				"scaling": "D",
				"required": 5
			}
		},
		"appearance": "iron shovel",
		"lore": "An iron mace that is standard issue among paladins of Leere.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1003",
		"name": "Falchion",
		"displayname": "&6Falchion",
		"swing": {
			"class": "Medium",
			"range": 3,
			"weight": 28
		},
		"damage": {
			"physical": 60
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 4
			},
			"strength": {
				"scaling": "E",
				"required": 3
			}
		},
		"appearance": "gold sword",
		"lore": "A sabre commonly wielded by mercenaries. Benefits from both the wielder's strength and dexterity.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1002",
		"name": "Shortsword",
		"displayname": "&6Shortsword",
		"swing": {
			"class": "Light",
			"range": 3,
			"weight": 22
		},
		"damage": {
			"physical": 50
		},
		"attributes": {
			"dexterity": {
				"scaling": "E",
				"required": 2
			},
			"strength": {
				"scaling": "E",
				"required": 2
			}
		},
		"appearance": "stone sword",
		"lore": "A common sword that is light and easy to wield; however, its potential is limited.",
		"upgrading": {
			"type": 1
		}
	},
	{
		"id": "1001",
		"name": "Dagger",
		"displayname": "&6Dagger",
		"swing": {
			"crit": 2.5,
			"class": "Very Light",
			"range": 2,
			"weight": 16
		},
		"damage": {
			"physical": 35
		},
		"attributes": {
			"dexterity": {
				"scaling": "D",
				"required": 6
			}
		},
		"appearance": "wooden sword",
		"lore": "A small dagger used by hunters. Daggers are effective at performing critical hits and stunlocking enemies.",
		"special": {},
		"upgrading": {
			"type": 1
		}
	}
]