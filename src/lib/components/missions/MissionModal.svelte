<script>
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';

	let { isOpen, mission, character, onClose, onImageError } = $props();
	let loaded = $state(false);
	let showCopied = $state(false);

	// FIXED: Track timeout for cleanup
	let copyTimeout = null;

	// FIXED: Reset state when mission changes
	$effect(() => {
		if (mission) {
			loaded = false;
			showCopied = false;
			if (copyTimeout) clearTimeout(copyTimeout);
		}
	});

	// FIXED: Cleanup timeout on unmount
	onDestroy(() => {
		if (copyTimeout) clearTimeout(copyTimeout);
	});

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

	// FIXED: Better error handling and fallback support
	async function copyLink() {
		if (!browser || !mission) return;

		// FIXED: Clear existing timeout
		if (copyTimeout) clearTimeout(copyTimeout);

		try {
			const url = new URL(window.location.href);
			url.searchParams.set('missionId', mission.id);
			const shareUrl = url.toString();

			// Check if clipboard API is available
			if (!navigator.clipboard) {
				fallbackCopyToClipboard(shareUrl);
				showCopied = true;
				copyTimeout = setTimeout(() => {
					showCopied = false;
					copyTimeout = null;
				}, 2000);
				return;
			}

			await navigator.clipboard.writeText(shareUrl);
			showCopied = true;

			copyTimeout = setTimeout(() => {
				showCopied = false;
				copyTimeout = null;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy link:', err);
			// Keep button enabled so user can try again
			showCopied = false;
		}
	}
</script>

{#if isOpen && mission}
	<dialog class="modal" class:modal-open={isOpen}>
		<div class="modal-box max-w-2xl">
			<!-- Character Info -->
			<div class="mb-4 flex items-center gap-3">
				{#if !loaded}
					<div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
				{/if}
				<img
					src={character?.avatar}
					alt={character?.name}
					class="h-16 w-16 rounded-full object-cover"
					class:hidden={!loaded}
					onload={() => (loaded = true)}
					onerror={onImageError}
					loading="lazy"
				/>
				<div>
					<h3 class="text-2xl font-bold">{mission.title}</h3>
					<p class="text-sm opacity-70">{character?.name}</p>
				</div>
			</div>

			<!-- Objectives -->
			<div class="mb-6">
				<h4 class="mb-3 text-lg font-semibold">Objectives</h4>
				<ul class="space-y-2">
					{#each mission.objectives as objective}
						<li class="flex items-start gap-2">
							<div class="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"></div>
							<span>{objective}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Rewards -->
			<div class="mb-6">
				<h4 class="mb-3 text-lg font-semibold">Rewards</h4>
				<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
					<div class="card bg-base-200">
						<div class="card-body p-4">
							<div class="text-xs opacity-70">Experience</div>
							<div class="text-xl font-bold">{mission.rewards.xp.toLocaleString()} XP</div>
						</div>
					</div>
					<div class="card bg-base-200">
						<div class="card-body p-4">
							<div class="text-xs opacity-70">Money</div>
							<div class="text-xl font-bold">{mission.rewards.koen.toLocaleString()} K</div>
						</div>
					</div>
					{#if mission.rewards.items?.length > 0}
						{#each mission.rewards.items as item}
							<div class="card bg-base-200">
								<div class="card-body p-4">
									<div class="text-xs opacity-70">Item</div>
									<div class="font-semibold">{item}</div>
								</div>
							</div>
						{/each}
					{/if}
				</div>
			</div>

			<!-- Actions -->
			<div class="modal-action mt-6 justify-between">
				<!-- FIXED: Share Link button like in settings -->
				<button
					class="btn btn-sm btn-outline gap-2"
					onclick={copyLink}
					class:btn-success={showCopied}
					aria-label={showCopied ? 'Mission link copied' : 'Share mission link'}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						{#if showCopied}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
							/>
						{/if}
					</svg>
					<span class="hidden sm:inline">{showCopied ? 'Copied!' : 'Share Link'}</span>
					<span class="sm:hidden">{showCopied ? 'Copied!' : 'Share'}</span>
				</button>
				<button class="btn" onclick={onClose}>Close</button>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button onclick={onClose} aria-label="Close modal">close</button>
		</form>
	</dialog>
{/if}
