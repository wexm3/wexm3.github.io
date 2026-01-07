<script>
	import { onMount } from 'svelte';
	import { getActiveAnnouncements } from '$lib/data/announcements.js';
	import { slide } from 'svelte/transition';

	let announcements = $state([]);

	onMount(() => {
		// Fetch announcements on the client. This avoids SSR issues
		// and allows checking localStorage for dismissed items.
		announcements = getActiveAnnouncements();
	});

	function dismissAnnouncement(id) {
		localStorage.setItem(`announcement-dismissed-${id}`, 'true');
		announcements = announcements.filter((a) => a.id !== id);
	}
</script>

<!-- Safelist for Tailwind CSS to ensure it bundles these dynamic classes -->
<div class="hidden alert-info alert-success alert-warning alert-error"></div>

<!--
  This container ensures that even if there are multiple announcements,
  they are all contained within the sticky positioning context.
-->
<div class="sticky top-0 z-50">
	{#each announcements as announcement (announcement.id)}
		<!-- Use a transition for smooth appearance/disappearance on dismiss -->
		<div transition:slide={{ duration: 300 }}>
			<div
				class="alert alert-soft alert-{announcement.type ||
					'info'} rounded-none items-center justify-center relative"
				role="alert"
			>
				<!-- Centered Content -->
				<div class="text-center">
					<span>{announcement.message}</span>
					{#if announcement.link}
						<a href={announcement.link} class="announcement-link">
							{announcement.linkText || 'Learn more'}
						</a>
					{/if}
				</div>

				<!-- Absolutely Positioned Button -->
				{#if announcement.dismissible}
					<div class="absolute right-0 pr-4">
						<button
							class="announcement-dismiss"
							onclick={() => dismissAnnouncement(announcement.id)}
						>
							Dismiss
						</button>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.alert {
		/* Overriding default alert padding to make it thinner */
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}

	.announcement-link {
		text-decoration: underline;
		font-weight: 500;
	}

	.announcement-dismiss {
		/* Reset button styles */
		background: none;
		border: none;
		margin: 0;
		/* Custom styling for a small text button */
		color: currentColor;
		opacity: 0.7;
		transition: all 0.2s;
		font-size: 0.75rem; /* 12px */
		line-height: 1;
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.announcement-dismiss:hover {
		background-color: oklch(var(--b2) / 0.5); /* Use a subtle theme-aware background */
		opacity: 1;
	}
</style>