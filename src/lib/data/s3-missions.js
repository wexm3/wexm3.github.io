export const missionBlocks = [
	{ id: 'cycle-of-revenge', name: 'Cycle of Revenge' },
	{ id: 'end-of-the-road', name: 'End of the Road' },
	{ id: 'separate-paths', name: 'Separate Paths' }
];

export const characters = [
	{ id: 'deke-vinson', name: 'Deke Vinson', avatar: '/images/abi-characters/deke64.webp' },
	{ id: 'ajax', name: 'Ajax', avatar: '/images/abi-characters/ajax64.webp' },
	{ id: 'unknown-guest', name: 'Unknown Guest', avatar: '/images/abi-characters/unknown64.webp' },
	{ id: 'renoir', name: 'Renoir', avatar: '/images/abi-characters/renoir64.webp' }
];

export const missions = [
	// Cycle of Revenge Block
	{
		id: 1,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'The Beginning of Conflict',
		objectives: ['Go to the Small Hall in Farm', 'Put down supplies'],
		rewards: { xp: 5000, koen: 20000, items: [] }
	},
	{
		id: 2,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Conflict Resolution',
		objectives: ['Search unsearched containers 15 times in Farm.', 'Bring out items worth 200,000 Koen.'],
		rewards: { xp: 5000, koen: 20000 }
	},
	{
		id: 3,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Compensation',
		objectives: ['Go to the Frontier Positions in Valley', 'Go to the Supply Camp in Valley.', 'Go to the Radar Station in Valley.'],
		rewards: { xp: 6000, koen: 20000}
	},
	{
		id: 4,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Arrogance',
		objectives: ['Eliminate 5 enemies at Norteno Court/Valley Village/RV Camp in Valley.'],
		rewards: { xp: 6000, koen: 20000 }
	},
	{
		id: 5,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Risk Management',
		objectives: ['Investigate the truck on the Highway in Farm.', 'Investigate the Broken Bridge on the Highway in Farm.', 'Investigate the roadblock on the Highway in Farm.', 'Eliminate 5 enemies near the East-West Main Road in Farm.'],
		rewards: { xp: 6000, koen: 20000 }
	},
	{
		id: 6,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Paranoia',
		objectives: ['Search unsearched containers 5 times at the Supply Camp in Valley.', 'Eliminate 5 enemies at Beachhead Positions/Supply Camp/Frontier Positions in Valley.'],
		rewards: { xp: 6000, koen: 20000 }
	},
	{
		id: 7,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Abnormalities',
		objectives: ['Search unsearched safes 1 time in Valley.', 'Verify the evidence at Pino Radio Station in Valley.'],
		rewards: { xp: 7000, koen: 20000}
	},
	{
		id: 8,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Shadow of the West',
		objectives: ['Search unsearched containers 5 times in N. Village in Northridge.', 'Investigate anti-aircraft missiles at the N. Village in Northridge.', 'Place beacon at S. Village in Northridge.'],
		rewards: { xp: 7000, koen: 20000}
	},
	{
		id: 9,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Snafu',
		objectives: ['Search unsearched clothes and document boxes 4 times in N. Village in Northridge.', 'Find traces of explosives production at the N. Village Weapon Store in Northridge.'],
		rewards: { xp: 7000, koen: 20000}
	},
	{
		id: 10,
		block: 'cycle-of-revenge',
		character: 'deke-vinson',
		title: 'Choice',
		objectives: ['Eliminate 3 operators in Northridge.', 'Eliminate 5 militants in Northridge.'],
		rewards: { xp: 7000, koen: 20000, items: ['Lion GBox'] }
	},
	{
		id: 11,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Boss',
		objectives: ['Go to the Villa in Farm.', 'Go to the Stable at Farm.', 'Go to the Grain Trade Center in Farm.'],
		rewards: { xp: 5000, koen: 20000 }
	},
	{
		id: 12,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Retreat',
		objectives: ['Eliminate 5 enemies.', 'Find items at the Breach Villa in Valley.'],
		rewards: { xp: 5000, koen: 20000 }
	},
	{
		id: 13,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Cleaning House',
		objectives: ['Set up camp at the Campsite in Valley.', 'Deliver 20 household items brought out from the Dark Zone.'],
		rewards: { xp: 6000, koen: 20000 }
	},
	{
		id: 14,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Rift',
		objectives: ['Send a letter to the Pino Radio Station in Valley.', 'Extract from Valley 1 time.'],
		rewards: { xp: 6000, koen: 20000 }
	},
	{
		id: 15,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'The Past',
		objectives: ['Go to the N. and S. Villages in Northridge.', 'Go to the Sawmill in Northridge.', 'Go to the Northridge Hotel in Northridge.'],
		rewards: { xp: 6000, koen: 20000 }
	},
	{
		id: 16,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Expert',
		objectives: ['Search unsearched clothes 6 times in S. Village/Sewage Plant in Northridge.', 'Place a letter on the second floor of the Beekeeper\'s Hut in Northridge.'],
		rewards: { xp: 6000, koen: 20000 }
	},
	{
		id: 17,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Nightmare',
		objectives: ['Deliver 20 miscellaneous military items brought out from the Dark Zone.', 'Bring out items worth 300,000 Koen.'],
		rewards: { xp: 7000, koen: 20000 }
	},
	{
		id: 18,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Declaration of Allegiance',
		objectives: ['Search unsearched office drawers 3 times in N. Village in Northridge.', 'Eliminate 5 enemies at the N. and S. Villages/Sewage Plant/Sawmill in Northridge.'],
		rewards: { xp: 7000, koen: 20000 }
	},
	{
		id: 19,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Out of the Net',
		objectives: ['Go to the Dilapidated Shack in Northridge.', 'Go to the SW Camp in Northridge.', 'Eliminate 5 enemies at Camp Service in Northridge.', 'Send a message for help from the Observation Tower in Northridge.'],
		rewards: { xp: 7000, koen: 20000 }
	},
	{
		id: 20,
		block: 'cycle-of-revenge',
		character: 'unknown-guest',
		title: 'Lying in Wait',
		objectives: ['Eliminate 3 operators in Northridge.', 'Extract from Northridge 1 time.'],
		rewards: { xp: 7000, koen: 20000, items: ['Lion GBox'] },
	},
	// End of the Road
	{
		id: 21,
		block: 'end-of-the-road',
		character: 'deke-vinson',
		title: 'Breaking Point',
		objectives: [
			'Go to the Radar Station in Armory.',
			'Place letters at the Armory Maintenance Room Regional Electrical Office in Armory.',
		],
		rewards: { xp: 8000, koen: 20000 },
	},
	{
		id: 22,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'Guard Corps',
		objectives: [
			'Scout the surroundings at the Stable Riding School in Farm.',
			'Scout the surroundings at the Grain Trade Center Loading Area in Form.',
			'Eliminate 8 enemies with a Mini14/F57/UMP45 at the Stable/Grain Trade Center in Farm.'
		],
		rewards: { xp: 8000, koen: 20000 },
	},
	{
		id: 23,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'Identity Revealed',
		objectives: [
			'Investigate clues at the Port or Barn in Valley.',
			'Eliminate 10 enemies at the Small Factory in Valley.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 24,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'Empty-Handed',
		objectives: [
			'Search containers 5 times at the Communication Station Main Building in Northridge.',
			'Destroy the control panel in the Communication Station Annex Building in Northridge.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 25,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'Reinforcing Defenses',
		objectives: [
			'Investigate the damaged exterior walls at the Gas Station or Repair Facility in Armory.',
			'Deliver 30 building items brought out from the Dark Zone.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 26,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'Dark as Night',
		objectives: [
			'Set up Observation Point No. 1 at Mine Periphery in Armory.',
			'Set up Observation Point No. 2 at Mine Periphery in Armory.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 27,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'Tables, Turned',
		objectives: [
			'Eliminate 8 operators at Armory Periphery in Armory.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 28,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'Situation Settled',
		objectives: [
			'Eliminate 5 enemies at Valley Village in Valley.',
			'Place gifts at the Valley Village in Valley.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 29,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'No Way Out',
		objectives: [
			'Eliminate 10 enemies at Radar Station/Beachhead Positions/Port in Valley.',
			'Bring out 2 primary weapons from Valley.',
		],
		rewards: { xp: 10000, koen: 20000 },
	},
	{
		id: 30,
		block: 'end-of-the-road',
		character: 'ajax',
		title: 'Armory Memories',
		objectives: [
			'Obtain reward from the counter on the second floor of the Motel in Farm.',
		],
		rewards: { xp: 12000, koen: 20000, items: ['Lion GBox'] },
	},
	{
		id: 31,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Survivors',
		objectives: [
			'Bring out 30 weapon accessories from the Dark Zone.',
			'Bring out 240 rounds of various ammo from the Dark Zone.',
		],
		rewards: { xp: 8000, koen: 20000 },
	},
	{
		id: 32,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Plan in Motion',
		objectives: [
			'Obtain explosives from the Parking Lot Store in Northridge.',
			'Hide explosives at the specified area at the Cable Car Observation Deck in Northridge.',
			'Extract from Northridge via the cable car 1 time.',
		],
		rewards: { xp: 8000, koen: 20000 },
	},
	{
		id: 33,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Accident',
		objectives: [
			'Obtain operation plan from the third floor of Comp Services in Northridge.',
			'Place operation plan at the Mine Entrance in Armory.',
		],
		rewards: { xp: 8000, koen: 20000 },
	},
	{
		id: 34,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Advancing the Timeline',
		objectives: [
			'Eliminate 10 enemies at the Repair Facility in Armory.',
			'Place supplies at the specified location in the Secret Passage in Armory.',
		],
		rewards: { xp: 8000, koen: 20000 },
	},
	{
		id: 35,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'All According to Plan',
		objectives: [
			'Send letters to the Barn in Valley.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 36,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Turn for the Worse',
		objectives: [
			'Eliminate 8 operators at Armory Periphery in Armory.',
			'Extract successfully from Armory 1 time.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 37,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Escape Route',
		objectives: [
			'Search unsearched air drop containers 4 times in Valley.',
			'Send signal from the Small Port in Valley.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 38,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Spider Web',
		objectives: [
			'Investigate clues at the Eastern Farm in Valley.',
			'Observe ships at sea from the second floor of the Port in Valley.',
			'Eliminate 10 enemies in Valley.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 39,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Cheating Death Again',
		objectives: [
			'Loot 15 food or beverages in Valley.',
			'Investigate the boat beneath the cliff at the Pino Radio Station in Valley.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 40,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'No Escape',
		objectives: [
			'Offer your condolences at the candle table in the corridor behind the Small Hall in Farm.',
		],
		rewards: { xp: 9000, koen: 20000 },
	},
	{
		id: 41,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'Lone Warrior',
		objectives: [
			'Search unsearched document boxes 5 times in Farm.',
		],
		rewards: { xp: 10000, koen: 20000 },
	},
	{
		id: 42,
		block: 'end-of-the-road',
		character: 'unknown-guest',
		title: 'End of the Road',
		objectives: [
			'Examine the battle traces at the Armory Garage in Armory.',
			'Examine the battle traces at the Armory Ammo Dump in Armory.',
			'Examine the last battle traces and discover the letter at the Armory\'s specified location in Armory.',
			'Offer your condolences at the candle table in the corridor behind the Small Hall in Farm.'
		],
		rewards: { xp: 12000, koen: 20000, items: ['Lion GBox'] },
	},
	// Separate Paths
	{
		id: 43,
		block: 'separate-paths',
		character: 'renoir',
		title: 'Unwelcomed Guests',
		objectives: [
			'Eliminate 10 enemies with an F2000/ZC807/AR-57 in Valley.'
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 44,
		block: 'separate-paths',
		character: 'renoir',
		title: 'Bootstraps',
		objectives: [
			'Bring out items worth 1,500,000 Koen.'
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 45,
		block: 'separate-paths',
		character: 'renoir',
		title: 'A Lesson in Respect',
		objectives: [
			'Bring out 10 purple or better miscellaneous tools from Northridge.'
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 46,
		block: 'separate-paths',
		character: 'renoir',
		title: 'Changing Times',
		objectives: [
			'Eliminate 10 enemies at the Beach Villa in Valley.',
			'Investigate the Beach Villa in Valley.\n' +
			'Progress +10 for each container searched, +20 for every enemy eliminated, and +10 for every minute survived. (Team Objective)'
		],
		rewards: { xp: 15000, koen: 20000 },
	},
	{
		id: 47,
		block: 'separate-paths',
		character: 'renoir',
		title: 'A Warning',
		objectives: [
			'Eliminate 1 boss in Valley.'
		],
		rewards: { xp: 15000, koen: 20000 },
	},
	{
		id: 48,
		block: 'separate-paths',
		character: 'renoir',
		title: 'Authority and Power',
		objectives: [
			'Search unsearched document boxes 5 times in Armory Interior in Armory.',
			'Get a letter from the Basement Intelligence Center in Armory.'
		],
		rewards: { xp: 15000, koen: 20000 },
	},
	{
		id: 49,
		block: 'separate-paths',
		character: 'ajax',
		title: 'Hidden Dangers',
		objectives: [
			'Eliminate 10 enemies with a Vector 9/MPX/P90 on the east side of Farm.',
			'Retrieve combat plan from the Grain Trade Center Loading Area in Farm.'
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 50,
		block: 'separate-paths',
		character: 'ajax',
		title: 'Old Enemy',
		objectives: [
			'Deliver 30 flammable items brought out from the Dark Zone.'
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 51,
		block: 'separate-paths',
		character: 'ajax',
		title: 'Underground Network',
		objectives: [
			'Investigate the surroundings of the Periphery North Highway in Armory.\n' +
			'Progress +10 for each container searched, +20 for every enemy eliminated, and +10 for every minute survived. (Team Objective)'
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 52,
		block: 'separate-paths',
		character: 'ajax',
		title: 'Captured',
		objectives: [
			'Bring out 10 purple or better miscellaneous military items from Armory.'
		],
		rewards: { xp: 15000, koen: 20000 },
	},
	{
		id: 53,
		block: 'separate-paths',
		character: 'ajax',
		title: 'Jones',
		objectives: [
			'Search unsearched safes 5 times in Armory.',
			'Extract from Armory 1 time.'
		],
		rewards: { xp: 15000, koen: 20000 },
	},
	{
		id: 54,
		block: 'separate-paths',
		character: 'ajax',
		title: 'Recommendation',
		objectives: [
			'Get a letter from the second floor of the Grain Trade Center Loading Area in Farm.'
		],
		rewards: { xp: 15000, koen: 20000 },
	},
	{
		id: 55,
		block: 'separate-paths',
		character: 'deke-vinson',
		title: 'Old Friends in the Valley',
		objectives: [
			'Eliminate 6 operators in Valley.'
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 56,
		block: 'separate-paths',
		character: 'deke-vinson',
		title: 'Northridge Ore',
		objectives: [
			'Obtain supply samples from the pool table on the third floor of Northridge Hotel Building C in Northridge.',
			'Eliminate 10 enemies at Northridge Hotel in Northridge.',
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 57,
		block: 'separate-paths',
		character: 'deke-vinson',
		title: 'Three-Way Collaboration',
		objectives: [
			'Place samples on the second floor of the Beach Villa Main Building in Valley.',
			'Eliminate 1 boss in Northridge.',
		],
		rewards: { xp: 12000, koen: 20000 },
	},
	{
		id: 58,
		block: 'separate-paths',
		character: 'deke-vinson',
		title: 'Unity',
		objectives: [
			'Send a letter to the Northridge Hotel Building B 1st Floor Lobby in Northridge.',
			'Send a letter to the top floor of the Radar Station in Armory.'
		],
		rewards: { xp: 15000, koen: 20000 },
	},
	{
		id: 59,
		block: 'separate-paths',
		character: 'deke-vinson',
		title: 'Chess',
		objectives: [
			'Obtain reward from the Small Hall in Farm.',
			'Eliminate 2 bosses in Farm.',
		],
		rewards: { xp: 15000, koen: 20000 },
	},
	{
		id: 60,
		block: 'separate-paths',
		character: 'deke-vinson',
		title: 'Kamonans',
		objectives: [
			'Bring out 20 miscellaneous items that are gold or better.',
			'Extract successfully from TV Station 1 time.',
		],
		rewards: { xp: 15000, koen: 20000 },
	},
];
