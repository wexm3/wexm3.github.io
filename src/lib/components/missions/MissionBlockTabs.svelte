<script>
	let { blocks, activeBlockId, missionCounts, onBlockChange } = $props();
</script>

<div class="sticky top-0 z-[1] mb-6 bg-base-100 py-3 shadow-sm lg:static lg:py-0 lg:shadow-none">
	<div role="tablist" class="tabs tabs-boxed gap-1">
		{#each blocks as block}
			<button
				role="tab"
				class="tab gap-2 text-xs sm:text-sm"
				class:tab-active={activeBlockId === block.id}
				onclick={() => onBlockChange(block.id)}
			>
				<span class="hidden sm:inline">{block.name}</span>
				<span class="sm:hidden">{block.name.split(' ')[0]}</span>
				<span class="badge badge-sm" class:badge-primary={activeBlockId === block.id}>
					{missionCounts[block.id] || 0}
				</span>
			</button>
		{/each}
	</div>
</div>
