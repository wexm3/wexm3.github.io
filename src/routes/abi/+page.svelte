<script>
	import { preloadData, preloadCode } from '$app/navigation';
</script>

<svelte:head>
	<title>Arena Breakout: Infinite - wexm3</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<div class="max-w-4xl mx-auto">
		<h1 class="text-3xl font-bold text-center mb-8">Arena Breakout: Infinite</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<a
				href="/abi/settings"
				class="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer"
				data-sveltekit-preload-data="tap"
				data-sveltekit-preload-code="tap"
				on:mouseenter={() => {
					preloadData('/abi/settings');
					preloadCode('/abi/settings');
				}}
			>
				<div class="card-body items-center text-center">
					<h2 class="card-title">Settings</h2>
					<p class="text-base-content/70">Configure your preferences</p>
				</div>
			</a>

			<a
				href="/abi/s3-missions"
				class="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer"
				data-sveltekit-preload-data="tap"
				data-sveltekit-preload-code="tap"
				on:mouseenter={() => {
					preloadData('/abi/s3-missions');
					preloadCode('/abi/s3-missions');
				}}
			>
				<div class="card-body items-center text-center">
					<h2 class="card-title">Season 3 Missions</h2>
					<p class="text-base-content/70">View S3 mission timeline</p>
				</div>
			</a>

			<a
				href="/abi/s4-missions"
				class="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer"
				data-sveltekit-preload-data="tap"
				data-sveltekit-preload-code="tap"
				on:mouseenter={() => {
					preloadData('/abi/s4-missions');
					preloadCode('/abi/s4-missions');
				}}
			>
				<div class="card-body items-center text-center">
					<h2 class="card-title">Season 4 Missions</h2>
					<p class="text-base-content/70">View S4 mission timeline</p>
				</div>
			</a>
		</div>
	</div>
</div>
