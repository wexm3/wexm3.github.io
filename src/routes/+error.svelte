<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - Error</title>
</svelte:head>

<div class="hero min-h-[60vh]">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-9xl font-bold">{$page.status}</h1>
			<p class="text-3xl font-semibold mt-4">{$page.error?.message || 'Page not found'}</p>
			<p class="py-6">
				{#if $page.status === 404}
					The page you're looking for doesn't exist.
				{:else}
					Something went wrong. Please try again later.
				{/if}
			</p>
			<a href="/" class="btn btn-primary">Back to Home</a>
		</div>
	</div>
</div>
