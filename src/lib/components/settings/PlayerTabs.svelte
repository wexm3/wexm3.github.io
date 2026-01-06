<script>
	let { players, activePlayerId, imageLoaded, onPlayerChange } = $props();
</script>

<div role="tablist" class="tabs tabs-boxed mb-6 bg-base-200/50 p-2 flex-wrap">
	{#each players as player (player.id)}
		<button
			role="tab"
			class="tab gap-2 flex-nowrap transition-all"
			class:tab-active={activePlayerId === player.id}
			onclick={() => onPlayerChange(player.id)}
		>
			<div class="avatar">
				<div class="w-6 h-6 rounded-full">
					{#if imageLoaded[player.id]}
						<img src={player.avatar} alt={player.name} />
					{:else}
						<div class="skeleton w-full h-full rounded-full"></div>
					{/if}
				</div>
			</div>
			<span class="hidden sm:inline">{player.name}</span>
		</button>
	{/each}
</div>

<style>
	@media (max-width: 640px) {
		.tabs-boxed {
			gap: 0.25rem;
		}

		.tab {
			padding-left: 0.75rem;
			padding-right: 0.75rem;
		}
	}
</style>
