<script>
	let { monitor } = $props();

	// Check if any data exists
	const hasData = monitor && (monitor.model || monitor.resolution || monitor.refreshRate);
</script>

{#if hasData}
	<div class="card bg-base-200/50 shadow-sm">
		<div class="card-body p-4">
			<div class="space-y-2 text-sm">
				{#if monitor.model}
					<div class="flex justify-between">
						<span class="text-base-content/60">Model</span>
						<span class="font-medium">{monitor.model}</span>
					</div>
				{/if}
				{#if monitor.resolution}
					<div class="flex justify-between">
						<span class="text-base-content/60">Resolution</span>
						<span class="font-medium">{monitor.resolution}</span>
					</div>
				{/if}
				{#if monitor.refreshRate}
					<div class="flex justify-between">
						<span class="text-base-content/60">Refresh Rate</span>
						<span class="font-medium">{monitor.refreshRate} Hz</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
{:else}
	<div class="alert alert-info">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-current shrink-0 w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			></path>
		</svg>
		<span>No monitor settings available for this player yet.</span>
	</div>
{/if}
