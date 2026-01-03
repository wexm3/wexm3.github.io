<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
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
	<link rel="preload" href="/fonts/Asimovian.woff2" as="font" type="font/woff2" crossorigin />
	<link rel="preload" href="/images/logo.webp" as="image" />
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<Header>
	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>
</Header>
