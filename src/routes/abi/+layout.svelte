<script>
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	let { children } = $props();

	let breadcrumbs = $derived.by(() => {
		const items = [{ path: '/', label: 'wexm3' }];

		if ($page.url.pathname.startsWith('/abi')) {
			items.push({ path: '/abi', label: 'Arena Breakout: Infinite' });

			if ($page.url.pathname.startsWith('/abi/settings')) {
				items.push({ path: '/abi/settings', label: 'Settings' });
			}
		}

		return items;
	});
</script>

<div class="border-b border-base-300 bg-base-100 px-4 py-3">
	<div class="container mx-auto">
		<Breadcrumbs items={breadcrumbs} />
	</div>
</div>

<div>
	{@render children()}
</div>
