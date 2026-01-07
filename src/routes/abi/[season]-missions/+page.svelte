<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import MissionBlockTabs from '$lib/components/missions/MissionBlockTabs.svelte';
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

	// FIXED: Track timeout for cleanup
	let scrollTimeout = null;

	let storageKey = $derived(`${data.season}-last-viewed-mission`);
	let seasonNumber = $derived(data.season.replace('s', ''));

	// When searching, show results from all blocks; otherwise filter by active block
	let filteredMissions = $derived(getMissionsByBlock(data.missions, activeBlock));

	let missionsByCharacter = $derived(groupMissionsByCharacter(data.characters, filteredMissions));
	let missionCounts = $derived(createMissionCountMap(data.missionBlocks, data.missions));
	let validLastViewedMissionId = $derived(
		filteredMissions.some((m) => m.id === lastViewedMissionId) ? lastViewedMissionId : null
	);

	onMount(() => {
		if (browser) {
			// FIXED: Safe localStorage access with try-catch
			try {
				const saved = localStorage.getItem(storageKey);
				if (saved) {
					const parsedId = parseInt(saved, 10);
					// FIXED: Validate parsed number
					if (!isNaN(parsedId) && parsedId > 0) {
						lastViewedMissionId = parsedId;
					}
				}
			} catch (error) {
				console.warn('Failed to load last viewed mission:', error);
			}

			// Handle deep link for a specific mission, which overrides any other view
			const urlParams = new URLSearchParams(window.location.search);
			const missionIdFromUrl = urlParams.get('missionId');

			// FIXED: Validate missionIdFromUrl for XSS/injection
			if (
				missionIdFromUrl &&
				typeof missionIdFromUrl === 'string' &&
				/^\d+$/.test(missionIdFromUrl)
			) {
				const parsedId = parseInt(missionIdFromUrl, 10);

				// FIXED: Additional validation
				if (!isNaN(parsedId) && parsedId > 0 && parsedId < 10000) {
					const missionToOpen = data.missions.find((m) => m.id === parsedId);

					if (missionToOpen) {
						// Set the correct block for the mission to be displayed
						activeBlock = missionToOpen.block;

						// Open the modal for the mission
						handleMissionClick(missionToOpen);

						// FIXED: Clear existing timeout
						if (scrollTimeout) clearTimeout(scrollTimeout);

						// Scroll to the character's timeline for context after UI updates
						scrollTimeout = setTimeout(() => {
							const characterElement = document.getElementById(`char-${missionToOpen.character}`);
							if (characterElement) {
								characterElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
							}
							scrollTimeout = null;
						}, 100);

						// Clean up the URL to prevent the modal from re-opening on refresh
						try {
							urlParams.delete('missionId');
							const newUrl =
								urlParams.size > 0
									? `${window.location.pathname}?${urlParams}`
									: window.location.pathname;
							window.history.replaceState({}, '', newUrl);
						} catch (error) {
							console.warn('Failed to clean up URL:', error);
						}
					}
				}
			}
		}
	});

	// FIXED: Cleanup timeout on unmount
	onDestroy(() => {
		if (scrollTimeout) clearTimeout(scrollTimeout);
	});

	function handleBlockChange(blockId) {
		activeBlock = blockId;
	}

	function handleMissionClick(mission) {
		selectedMission = mission;
		modalOpen = true;
		lastViewedMissionId = mission.id;

		// FIXED: Safe localStorage with try-catch
		if (browser) {
			try {
				localStorage.setItem(storageKey, mission.id.toString());
			} catch (error) {
				console.warn('Failed to save last viewed mission:', error);
			}
		}
	}

	function handleModalClose() {
		modalOpen = false;
		selectedMission = null;
	}

	function handleImageError(event) {
		event.target.src = PLACEHOLDER_IMAGE;
	}
</script>

<svelte:head>
	<title>Season {seasonNumber} Missions - Arena Breakout: Infinite</title>
	<meta
		name="description"
		content="Track and complete Season {seasonNumber} missions in Arena Breakout: Infinite. View objectives, rewards, and character storylines."
	/>
	<meta name="robots" content="index, follow" />
	<!-- Preload character images for faster rendering -->
	{#each data.characters.slice(0, 4) as char}
		<link rel="preload" href={char.avatar} as="image" />
	{/each}
</svelte:head>

<div class="container mx-auto px-4 py-6">
	<MissionBlockTabs
		blocks={data.missionBlocks}
		activeBlockId={activeBlock}
		missionCounts={missionCounts}
		onBlockChange={handleBlockChange}
	/>

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

<MissionModal
	isOpen={modalOpen}
	mission={selectedMission}
	character={selectedMission ? getCharacterById(data.characters, selectedMission.character) : null}
	onClose={handleModalClose}
	onImageError={handleImageError}
/>
