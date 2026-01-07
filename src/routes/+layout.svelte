<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import BackToTopButton from '$lib/components/BackToTopButton.svelte';
	import AnnouncementBanner from '$lib/components/AnnouncementBanner.svelte';
	import { page, navigating } from '$app/stores';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// View Transitions for smooth page navigation
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let breadcrumbs = $derived.by(() => {
		const items = [{ path: '/', label: 'wexm3' }];

		if ($page.url.pathname.startsWith('/abi')) {
			items.push({ path: '/abi', label: 'Arena Breakout: Infinite' });

			if ($page.url.pathname.startsWith('/abi/settings')) {
				items.push({ path: '/abi/settings', label: 'Settings' });
			}

			// Match dynamic season routes
			const seasonMatch = $page.url.pathname.match(/\/abi\/(s\d+)-missions/);
			if (seasonMatch) {
				const season = seasonMatch[1];
				const seasonNumber = season.replace('s', '');
				items.push({ path: `/abi/${season}-missions`, label: `Season ${seasonNumber} Missions` });
			}
		}

		return items;
	});

	let showBreadcrumbs = $derived($page.url.pathname !== '/' && $page.status !== 404);
</script>

<svelte:head>
	<script>
		(function() {
			function getSystemTheme() {
				return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			}
			const savedTheme = localStorage.getItem('theme');
			const theme = savedTheme || getSystemTheme();
			document.documentElement.setAttribute('data-theme', theme);
		})();
	</script>

	<!-- SEO Meta Tags -->
	<meta name="description" content="wexm3 - my personal website where I share my gaming experience" />
	<meta name="keywords" content="wexm3, gaming, streamer, Arena Breakout Infinite, games, content creator" />
	<meta name="author" content="wexm3" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://wexm3.github.io/" />
	<meta property="og:title" content="wexm3" />
	<meta property="og:description" content="My personal website where I share my gaming experience" />
	<meta property="og:image" content="https://wexm3.github.io/images/logo.webp" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://wexm3.github.io/" />
	<meta property="twitter:title" content="wexm3" />
	<meta property="twitter:description" content="My personal website where I share my gaming experience" />
	<meta property="twitter:image" content="https://wexm3.github.io/images/logo.webp" />

	<link rel="canonical" href="https://wexm3.github.io{$page.url.pathname}" />

	<!-- Performance: Preload critical assets -->
	<link rel="preload" href="/fonts/Asimovian.woff2" as="font" type="font/woff2" crossorigin />
	<link rel="preload" href="/images/logo.webp" as="image" fetchpriority="high" />

	<!-- Favicon only -->
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>

<AnnouncementBanner />

<Header>
	{#if $navigating}
		<div class="fixed top-0 left-0 right-0 h-1 bg-primary z-50 animate-pulse"></div>
	{/if}

	{#if showBreadcrumbs}
		<div class="border-b border-base-300 bg-base-100 px-4 py-3">
			<div class="container mx-auto">
				<Breadcrumbs items={breadcrumbs} />
			</div>
		</div>
	{/if}
	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>
</Header>

<BackToTopButton />
