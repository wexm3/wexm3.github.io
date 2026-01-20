export const missionBlocks = [
	{ id: 'behind-the-curtains', name: 'Behind the Curtains' },
	{ id: 'echoes-of-the-past', name: 'Echoes of the Past' },
	{ id: 'twilight-flag', name: 'Twilight Flag' },
	{ id: 'hardcore-mission', name: 'Hardcore Mission' },
];

export const characters = [
	{ id: 'deke-vinson', name: 'Deke Vinson', avatar: '/images/abi-characters/deke64.webp' },
	{ id: 'thomas-edward', name : 'Thomas Edward', avatar: '/images/abi-characters/thomas-edward64.webp' },
	{ id: 'vladlen', name: 'Vladlen', avatar: '/images/abi-characters/vladlen64.webp' },
	{ id: 'hecate', name: 'Hecate', avatar: '/images/abi-characters/hecate64.webp' },
	{ id: 'talia', name: 'Talia', avatar: '/images/abi-characters/talia64.webp' },
	{ id: 'joel-garrison', name: 'Joel Garrison', avatar: '/images/abi-characters/joel-garrison64.webp' },
];

export const missions = [
	{
		id: 1,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'Peaceful Obstacle',
		objectives: [
			'Destroy the supplies at the Recycling Station Hut in Farm.',
			'Destroy the supplies at the Motel Military Tent in Farm.'
		],
		rewards: { xp: 5000, koen: 20000, items: [] }
	},
	{
		id: 2,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'The Long Game',
		objectives: [
			'Go to the Wheatfield Farmhouse on the east side of Farm and leave a mark on the bedroom wall.',
			'Go to the Cemetery Hut on the west side of Farm and leave a mark on the bedroom wall.',
			'Extract from Farm 1 time'
		],
		rewards: { xp: 5000, koen: 20000, items: [] }
	},
	{
		id: 3,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'Letter from Abyss',
		objectives: [
			'Go to the Lakeside Helicopter Point and stay for 45 seconds.\n' +
			'Enter Northridge with Signal Jammer.',
			'Go to the Access Bridge and place Signal Jammer. Enter Northridge with Signal Jammer.\n' +
			'Enter Northridge with Signal Jammer.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 4,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'Viper\'s Tongue',
		objectives: [
			'Eliminate 6 enemies at the Cable Car Station. Parking Lot, or Northridge Hotel in Northridge.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 5,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'The Bait',
		objectives: [
			'Deliver 20 miscellaneous paper items found in the Dark Zone.',
			'Retrieve the intel document from the second floor of the House in Farm.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 6,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'Black Box',
		objectives: [
			'Complete 4 Urgent Missions as a team in Farm.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 7,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'Black Box',
		objectives: [
			'Complete 4 Urgent Missions as a team in Farm.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 8,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'Synergy',
		objectives: [
			'Eliminate 6 enemies at the Small Factory, Noon Courtyard, or Supply Camp in Valley.'
		],
		rewards: { xp: 7000, koen: 20000, items: [] }
	},
	{
		id: 9,
		block: 'behind-the-curtains',
		character: 'thomas-edward',
		title: 'Burning Bridges',
		objectives: [
			'Complete 1 match on any difficulty in Valley.'
		],
		rewards: { xp: 7000, koen: 20000, items: [ 'Coin Raid Voucher'] }
	},
	{
		id: 10,
		block: 'behind-the-curtains',
		character: 'vladlen',
		title: 'Undercurrent',
		objectives: [
			'Eliminate 6 enemies at the Stable/Recycling Station/ Motel in Farm.',
			'Go to the Artificial Lake Hut in Farm and search 1 unsearched home computer.'
		],
		rewards: { xp: 5000, koen: 20000, items: [] }
	},
	{
		id: 11,
		block: 'behind-the-curtains',
		character: 'vladlen',
		title: 'Frontline Reconnaissance',
		objectives: [
			'Carry a Mountain Spring Water into Valley.',
			'Carry a Biscuit into Valley.',
			'Place Mountain Spring Water inside the Abandoned Shack in Valley.',
			'Place Biscuit inside the Abandoned Shack in Valley.'
		],
		rewards: { xp: 5000, koen: 20000, items: [] }
	},
	{
		id: 12,
		block: 'behind-the-curtains',
		character: 'vladlen',
		title: 'Tooth for a Tooth',
		objectives: [
			'Complete 4 Urgent Missions as a team in Valley.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 13,
		block: 'behind-the-curtains',
		character: 'vladlen',
		title: 'Protection and Responsibility',
		objectives: [
			'Eliminate 3 operators on the east side of Farm.',
			'Go to the Villa in Farm and place the letter.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 14,
		block: 'behind-the-curtains',
		character: 'vladlen',
		title: 'Risk Assessment',
		objectives: [
			'Eliminate 6 enemies in Northridge using a suppressed marksman rifle.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 15,
		block: 'behind-the-curtains',
		character: 'vladlen',
		title: 'Damage Control',
		objectives: [
			'Search 2 unsearched encrypted safes in Farm.',
			'Bring out 350,000 worth of loot in a single raid.',
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 16,
		block: 'behind-the-curtains',
		character: 'vladlen',
		title: 'No Defiance',
		objectives: [
			'Thoroughly investigate the Noan Courtyard in Valley and extract successfully.\n' +
			'Progress +10 for each container searched, +20 for every enemy eliminated, and +10 for every minute survived.',
			'Thoroughly investigate the Small Factory Basement in Valley and extract successfully.\n' +
			'Progress +10 for each container searched, +20 for every enemy eliminated, and +10 for every minute survived.',
		],
		rewards: { xp: 7000, koen: 20000, items: [] }
	},
	{
		id: 17,
		block: 'behind-the-curtains',
		character: 'vladlen',
		title: 'Burning Bridges',
		objectives: [
			'Earn Koen from the Market.',
			'Search 3 unsearched suitcases at the RV Camp in Valley.'
		],
		rewards: { xp: 7000, koen: 20000, items: [ 'Coin Raid Voucher'] }
	},
	{
		id: 18,
		block: 'behind-the-curtains',
		character: 'talia',
		title: 'Support the Flank',
		objectives: [
			'Eliminate 3 operators on the west side of Farm.',
			'Extract from Farm 1 time'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 19,
		block: 'behind-the-curtains',
		character: 'talia',
		title: 'Special Operation',
		objectives: [
			'Eliminate 3 operators in Valley.'
		],
		rewards: { xp: 6000, koen: 20000, items: [] }
	},
	{
		id: 20,
		block: 'behind-the-curtains',
		character: 'talia',
		title: 'Good Intentions',
		objectives: [
			'Eliminate 6 enemies at Armory Periphery in Armory.'
		],
		rewards: { xp: 7000, koen: 20000, items: [] }
	},
	{
		id: 21,
		block: 'behind-the-curtains',
		character: 'talia',
		title: 'Respect',
		objectives: [
			'Deliver 20 miscellaneous computer parts found in the Dark Zone.',
			'Place the intel document at the Underground Intelligence Center in Armory.'
		],
		rewards: { xp: 7000, koen: 20000, items: [ 'Coin Raid Voucher'] }
	},

];
