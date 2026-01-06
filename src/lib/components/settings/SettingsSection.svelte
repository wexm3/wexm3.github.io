<script>
	import SettingCard from './SettingCard.svelte';
	import MouseSettings from './MouseSettings.svelte';
	import MonitorSettings from './MonitorSettings.svelte';

	let { player, copiedCode, onCopy } = $props();

	// Check if sections have data (must be $derived to react to player changes)
	const hasCodesData = $derived(player.codes && Object.entries(player.codes).some(([_, code]) => code?.trim()));
	const hasMouseData = $derived(player.mouse && Object.keys(player.mouse).length > 0);
	const hasMonitorData = $derived(player.monitor && Object.keys(player.monitor).length > 0);

	const availableCodes = $derived(player.codes
		? Object.entries(player.codes).filter(([_, code]) => code?.trim())
		: []);
</script>

<div class="space-y-4">
	<!-- Settings - Codes -->
	{#if hasCodesData}
		<div class="collapse collapse-arrow bg-base-200/30">
			<input type="checkbox" checked />
			<div class="collapse-title text-lg font-semibold">Settings - Codes</div>
			<div class="collapse-content">
				<div class="grid gap-4 md:grid-cols-2 pt-2">
					{#each availableCodes as [category, code] (category)}
						<SettingCard
							{category}
							{code}
							isCopied={copiedCode === category}
							onCopy={() => onCopy(code, category)}
						/>
					{/each}
				</div>
			</div>
		</div>
	{/if}

	<!-- Settings - Mouse -->
	{#if hasMouseData}
		<div class="collapse collapse-arrow bg-base-200/30">
			<input type="checkbox" checked />
			<div class="collapse-title text-lg font-semibold">Settings - Mouse</div>
			<div class="collapse-content pt-2">
				<MouseSettings mouse={player.mouse} />
			</div>
		</div>
	{/if}

	<!-- Settings - Monitor -->
	{#if hasMonitorData}
		<div class="collapse collapse-arrow bg-base-200/30">
			<input type="checkbox" checked />
			<div class="collapse-title text-lg font-semibold">Settings - Monitor</div>
			<div class="collapse-content pt-2">
				<MonitorSettings monitor={player.monitor} />
			</div>
		</div>
	{/if}

	<!-- No data message -->
	{#if !hasCodesData && !hasMouseData && !hasMonitorData}
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
			<span>No settings available for this player yet.</span>
		</div>
	{/if}
</div>
