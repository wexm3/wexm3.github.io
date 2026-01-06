<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { playersSettings } from '$lib/data/abi-settings.js';
	import PlayerTabs from '$lib/components/settings/PlayerTabs.svelte';
	import PlayerInfo from '$lib/components/settings/PlayerInfo.svelte';
	import SettingsSection from '$lib/components/settings/SettingsSection.svelte';
	import LoadingSkeleton from '$lib/components/settings/LoadingSkeleton.svelte';

	// FIXED: Ensure playersSettings is not empty
	if (!playersSettings || playersSettings.length === 0) {
		throw new Error('No player settings data available');
	}

	// State
	let activePlayer = $state(playersSettings[0]?.id || '');
	let copiedCode = $state(null);
	let imageLoaded = $state({});
	let isInitialized = $state(false);

	// FIXED: Track timeouts for cleanup
	let copiedTimeout = null;

	// Initialize from URL
	$effect(() => {
		if (browser && !isInitialized) {
			const urlParams = new URLSearchParams(window.location.search);
			const playerFromUrl = urlParams.get('player');

			// FIXED: Validate playerFromUrl before using
			if (
				playerFromUrl &&
				typeof playerFromUrl === 'string' &&
				playerFromUrl.length < 50 &&
				/^[a-zA-Z0-9_-]+$/.test(playerFromUrl) &&
				playersSettings.some((p) => p.id === playerFromUrl)
			) {
				activePlayer = playerFromUrl;
			}
			isInitialized = true;
		}
	});

	// Derived state
	const currentPlayerData = $derived(
		playersSettings.find((p) => p.id === activePlayer) || playersSettings[0]
	);

	// FIXED: Preload avatars with error handling and cleanup
	onMount(() => {
		const loadedImages = [];

		playersSettings.forEach((player) => {
			const img = new Image();

			img.onload = () => {
				imageLoaded = { ...imageLoaded, [player.id]: true };
			};

			// FIXED: Handle image load errors
			img.onerror = () => {
				console.warn(`Failed to load avatar for ${player.name}`);
				imageLoaded = { ...imageLoaded, [player.id]: false };
			};

			img.src = player.avatar;
			loadedImages.push(img);
		});

		// FIXED: Cleanup function for images
		return () => {
			loadedImages.forEach((img) => {
				img.onload = null;
				img.onerror = null;
			});
		};
	});

	// FIXED: Cleanup timeouts on unmount
	onDestroy(() => {
		if (copiedTimeout) clearTimeout(copiedTimeout);
	});

	// Handlers
	function handlePlayerChange(playerId) {
		// FIXED: Validate playerId
		if (!playersSettings.some((p) => p.id === playerId)) {
			console.error('Invalid player ID:', playerId);
			return;
		}

		activePlayer = playerId;

		if (browser) {
			try {
				const url = new URL(window.location);
				url.searchParams.set('player', playerId);
				window.history.replaceState({}, '', url);
			} catch (error) {
				console.error('Failed to update URL:', error);
			}
		}
	}

	// FIXED: Clipboard fallback and better error handling
	async function copyToClipboard(code, category) {
		try {
			// Check if clipboard API is available
			if (!navigator.clipboard) {
				// FIXED: Fallback for older browsers or HTTP
				fallbackCopyToClipboard(code);
				copiedCode = category;

				if (copiedTimeout) clearTimeout(copiedTimeout);
				copiedTimeout = setTimeout(() => {
					copiedCode = null;
					copiedTimeout = null;
				}, 2000);
				return;
			}

			await navigator.clipboard.writeText(code);
			copiedCode = category;

			// FIXED: Clear existing timeout
			if (copiedTimeout) clearTimeout(copiedTimeout);
			copiedTimeout = setTimeout(() => {
				copiedCode = null;
				copiedTimeout = null;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

	// FIXED: Fallback copy method for older browsers
	function fallbackCopyToClipboard(text) {
		const textArea = document.createElement('textarea');
		textArea.value = text;
		textArea.style.position = 'fixed';
		textArea.style.left = '-999999px';
		textArea.style.top = '-999999px';
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			document.execCommand('copy');
		} catch (err) {
			console.error('Fallback copy failed:', err);
			throw err;
		} finally {
			document.body.removeChild(textArea);
		}
	}
</script>

<svelte:head>
	<title>Settings - Arena Breakout: Infinite</title>
	<meta
		name="description"
		content="View and copy player settings including game codes, mouse sensitivity, and monitor configurations for Arena Breakout: Infinite"
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-4xl">
	<!-- Header -->
	<header class="mb-8">
		<h1 class="text-3xl md:text-4xl font-bold mb-2">Settings - Arena Breakout: Infinite</h1>
		<p class="text-base-content/70">
			Game codes, mouse sensitivity, monitor specs, and more
		</p>
	</header>

	<!-- Player Selection -->
	{#if !isInitialized}
		<LoadingSkeleton type="tabs" />
	{:else}
		<PlayerTabs
			players={playersSettings}
			activePlayerId={activePlayer}
			{imageLoaded}
			onPlayerChange={handlePlayerChange}
		/>
	{/if}

	<!-- Content -->
	{#if !isInitialized}
		<LoadingSkeleton type="content" />
	{:else if currentPlayerData}
		{#key activePlayer}
			<!-- Player Info -->
			<PlayerInfo player={currentPlayerData} {imageLoaded} />

			<!-- Settings Sections (Accordion) -->
			<SettingsSection player={currentPlayerData} {copiedCode} onCopy={copyToClipboard} />
		{/key}
	{/if}
</div>

<style>
	.tabs-boxed {
		background: oklch(var(--b2) / 0.5);
	}
</style>
