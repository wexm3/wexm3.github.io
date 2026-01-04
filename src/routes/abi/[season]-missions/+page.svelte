<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import BackToTopButton from '$lib/components/BackToTopButton.svelte';
	import MissionBlockTabs from '$lib/components/missions/MissionBlockTabs.svelte';
	import MissionSearch from '$lib/components/missions/MissionSearch.svelte';
	import CharacterNavigation from '$lib/components/missions/CharacterNavigation.svelte';
	import MissionTimeline from '$lib/components/missions/MissionTimeline.svelte';
	import MissionModal from '$lib/components/missions/MissionModal.svelte';
	import EmptyState from '$lib/components/missions/EmptyState.svelte';

	import {
		getCharacterById,
		getMissionsByBlock,
		groupMissionsByCharacter,
		createMissionCountMap
	} from '$lib/utils/missions.js';

	let { data } = $props();

	const PLACEHOLDER_IMAGE =
		'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23ddd"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="%23999"%3E%3F%3C/text%3E%3C/svg%3E';

	let activeBlock = $state(data.missionBlocks[0]?.id || '');
	let selectedMission = $state(null);
	let modalOpen = $state(false);
	let lastViewedMissionId = $state(null);
	let searchQuery = $state('');
	let searchedMissions = $state([]);

	let storageKey = $derived(`${data.season}-last-viewed-mission`);
	let seasonNumber = $derived(data.season.replace('s', ''));

	// When searching, show results from all blocks; otherwise filter by active block
	let blockFilteredMissions = $derived(getMissionsByBlock(data.missions, activeBlock));
	let filteredMissions = $derived(searchQuery ? searchedMissions : blockFilteredMissions);

	let missionsByCharacter = $derived(groupMissionsByCharacter(data.characters, filteredMissions));
	let missionCounts = $derived(createMissionCountMap(data.missionBlocks, data.missions));
	let validLastViewedMissionId = $derived(
		filteredMissions.some((m) => m.id === lastViewedMissionId) ? lastViewedMissionId : null
	);

	onMount(() => {
		if (browser) {
			const saved = localStorage.getItem(storageKey);
			if (saved) {
				lastViewedMissionId = parseInt(saved);
			}
		}
	});

	function handleBlockChange(blockId) {
		activeBlock = blockId;
	}

	function handleMissionClick(mission) {
		selectedMission = mission;
		modalOpen = true;
		lastViewedMissionId = mission.id;

		if (browser) {
			localStorage.setItem(storageKey, mission.id.toString());
		}
	}

	function handleModalClose() {
		modalOpen = false;
		selectedMission = null;
	}

	function handleImageError(event) {
		event.target.src = PLACEHOLDER_IMAGE;
	}

	function handleSearch(missions, query) {
		searchedMissions = missions;
		searchQuery = query;
	}
</script>

<svelte:head>
	<title>Season {seasonNumber} Missions - Arena Breakout: Infinite</title>
	<!-- Preload character images for faster rendering -->
	{#each data.characters.slice(0, 4) as char}
		<link rel="preload" href={char.avatar} as="image" />
	{/each}
</svelte:head>

<div class="container mx-auto px-4 py-6">
	<MissionSearch missions={data.missions} onSearch={handleSearch} />

	{#if !searchQuery}
		<MissionBlockTabs
			blocks={data.missionBlocks}
			activeBlockId={activeBlock}
			missionCounts={missionCounts}
			onBlockChange={handleBlockChange}
		/>
	{/if}

	<CharacterNavigation
		characters={data.characters}
		{missionsByCharacter}
		onImageError={handleImageError}
	/>

	<div class="space-y-8 lg:space-y-10">
		{#each data.characters as char (char.id + '-' + activeBlock)}
			{#if missionsByCharacter[char.id]?.length > 0}
				<MissionTimeline
					character={char}
					missions={missionsByCharacter[char.id]}
					lastViewedMissionId={validLastViewedMissionId}
					onMissionClick={handleMissionClick}
					onImageError={handleImageError}
				/>
			{/if}
		{/each}
	</div>

	{#if filteredMissions.length === 0}
		<EmptyState />
	{/if}
</div>

<BackToTopButton />

<MissionModal
	isOpen={modalOpen}
	mission={selectedMission}
	character={selectedMission ? getCharacterById(data.characters, selectedMission.character) : null}
	onClose={handleModalClose}
	onImageError={handleImageError}
/>
