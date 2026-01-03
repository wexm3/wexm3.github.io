<script>
	import Youtube from '$lib/components/icons/Youtube.svelte';
	import Tiktok from '$lib/components/icons/Tiktok.svelte';
	import Telegram from '$lib/components/icons/Telegram.svelte';
	import Twitch from '$lib/components/icons/Twitch.svelte';

	const socialLinks = [
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/@wexm3',
			component: Youtube
		},
		{
			name: 'TikTok',
			url: 'https://www.tiktok.com/@wexm3_',
			component: Tiktok
		},
		{
			name: 'Telegram',
			url: 'https://t.me/wexm3',
			component: Telegram
		},
		{
			name: 'Twitch',
			url: 'https://www.twitch.tv/wexm3',
			component: Twitch
		}
	];
</script>

<div class="flex flex-col items-center w-full">
	<div class="w-full max-w-sm">
		{#each socialLinks as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-block btn-lg mb-4 flex items-center justify-between"
				data-umami-event={`Socials: ${link.name}`}
			>
				<svelte:component this={link.component} class="w-8 h-8" />
				<span class="flex-grow text-center">{link.name}</span>
			</a>
		{/each}
	</div>
</div>
