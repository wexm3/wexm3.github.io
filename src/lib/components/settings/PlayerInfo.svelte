<script>
	let { player, imageLoaded, onShare } = $props();

	// FIXED: Safe date formatting with fallback
	function formatDate(dateString) {
		if (!dateString) return 'Unknown';
		try {
			const date = new Date(dateString);
			if (isNaN(date.getTime())) return 'Invalid date';
			return date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			});
		} catch (e) {
			console.error('Date formatting error:', e);
			return 'Invalid date';
		}
	}

	// FIXED: Safe image loading with error handling
	function handleImageError(event) {
		event.target.style.display = 'none';
		// Keep skeleton visible
	}
</script>

<div
	class="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-base-200/30 rounded-lg"
>
	<div class="flex items-center gap-3">
		<div class="avatar">
			<div class="w-12 h-12 rounded-full">
				{#if imageLoaded[player.id]}
					<img
						src={player.avatar}
						alt="{player.name}'s avatar"
						onerror={handleImageError}
						loading="lazy"
					/>
				{:else}
					<div class="skeleton w-full h-full rounded-full"></div>
				{/if}
			</div>
		</div>
		<div>
			<h2 class="text-xl font-semibold">{player.name}</h2>
			<p class="text-sm text-base-content/60">
				Last updated: {formatDate(player.lastUpdated)}
			</p>
		</div>
	</div>
	<button class="btn btn-sm btn-outline gap-2" onclick={onShare} aria-label="Share player settings">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
			/>
		</svg>
		<span class="hidden sm:inline">Share Link</span>
		<span class="sm:hidden">Share</span>
	</button>
</div>
