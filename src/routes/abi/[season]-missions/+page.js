import { error } from '@sveltejs/kit';

export const prerender = true;

// Tell SvelteKit which seasons to prerender
export async function entries() {
	return [
		{ season: 's3' },
		{ season: 's4' }
	];
}

export async function load({ params }) {
	const { season } = params;

	// Validate season parameter
	if (!['s3', 's4'].includes(season)) {
		throw error(404, 'Season not found');
	}

	// Dynamically import mission data based on season
	const missionData = await import(`$lib/data/${season}-missions.js`);

	return {
		season,
		missionBlocks: missionData.missionBlocks,
		characters: missionData.characters,
		missions: missionData.missions
	};
}
