export function getCharacterById(characters, id) {
	return characters.find((c) => c.id === id);
}

export function getMissionCountByBlock(missions, blockId) {
	return missions.filter((m) => m.block === blockId).length;
}

export function getMissionsByBlock(missions, blockId) {
	return missions.filter((m) => m.block === blockId);
}

export function groupMissionsByCharacter(characters, missions) {
	const grouped = {};
	characters.forEach((char) => {
		grouped[char.id] = missions.filter((m) => m.character === char.id);
	});
	return grouped;
}

export function createMissionCountMap(missionBlocks, missions) {
	const counts = {};
	missionBlocks.forEach((block) => {
		counts[block.id] = getMissionCountByBlock(missions, block.id);
	});
	return counts;
}
