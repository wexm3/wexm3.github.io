<script>
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Arena Breakout: Infinite - wexm3</title>
</svelte:head>

<PageContainer maxWidth="default">
	<PageHeader
		title="Arena Breakout: Infinite"
		align="center"
	/>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
		<Card
			href="/abi/settings"
			icon="⚙️"
			title="Settings"
			description="Game codes, mouse sensitivity, monitor specs"
		/>

		<Card
			href="/abi/s3-missions"
			icon="🎯"
			title="Season 3 Missions"
			description="View S3 mission timeline"
		/>

		<Card
			href="/abi/s4-missions"
			icon="🎯"
			title="Season 4 Missions"
			description="View S4 mission timeline"
		/>
	</div>
</PageContainer>
