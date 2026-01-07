<script>
	let {
		title = 'wexm3',
		description = 'My personal website where I share my gaming experience',
		image = '/images/logo.webp',
		url = '',
		type = 'website'
	} = $props();

	const baseUrl = 'https://wexm3.github.io';
	const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
	const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={fullUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={fullImage} />

	<!-- Canonical -->
	<link rel="canonical" href={fullUrl} />
</svelte:head>
