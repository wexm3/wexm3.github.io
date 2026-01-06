<script>
	let { type = 'tabs' } = $props();
</script>

{#if type === 'tabs'}
	<div class="tabs tabs-boxed mb-6 bg-base-200/50 p-2 flex-wrap tab-skeleton">
		{#each [1, 2] as i}
			<div class="skeleton h-10 w-20 sm:w-24 rounded-lg"></div>
		{/each}
	</div>
{:else if type === 'content'}
	<div class="space-y-4">
		<!-- Player Info Skeleton -->
		<div class="flex items-center gap-3 p-4 bg-base-200/30 rounded-lg">
			<div class="skeleton w-12 h-12 rounded-full"></div>
			<div class="space-y-2">
				<div class="skeleton h-6 w-32"></div>
				<div class="skeleton h-4 w-48"></div>
			</div>
		</div>

		<!-- Accordion Sections Skeleton -->
		{#each [1, 2, 3] as i}
			<div class="skeleton h-16 rounded-lg"></div>
		{/each}
	</div>
{/if}

<style>
	@media (max-width: 640px) {
		.tab-skeleton {
			gap: 0.25rem;
		}
	}
</style>
