<script>
	import { scopeTypes } from '$lib/data/abi-settings.js';

	let { mouse } = $props();
	let scopesExpanded = $state(false);

	// FIXED: Use $derived for reactivity
	const hasData = $derived(
		mouse &&
			(mouse.model ||
				mouse.dpi ||
				mouse.pollingRate ||
				mouse.mouseSensitivity !== undefined ||
				mouse.aimSensitivity !== undefined ||
				mouse.freeCameraSensitivity !== undefined)
	);

	const hasScopeData = $derived(
		mouse?.scopeSensitivities && Object.keys(mouse.scopeSensitivities).length > 0
	);

	// FIXED: Sort scope sensitivities by scope type order
	const sortedScopeSensitivities = $derived(() => {
		if (!hasScopeData) return [];
		const entries = Object.entries(mouse.scopeSensitivities);
		return entries.sort((a, b) => {
			const indexA = scopeTypes.indexOf(a[0]);
			const indexB = scopeTypes.indexOf(b[0]);
			if (indexA === -1) return 1;
			if (indexB === -1) return -1;
			return indexA - indexB;
		});
	});

	// FIXED: Reset expanded state when mouse changes
	$effect(() => {
		if (mouse) {
			scopesExpanded = false;
		}
	});
</script>

{#if hasData}
	<div class="space-y-3">
		<!-- Hardware Info -->
		{#if mouse.model || mouse.dpi || mouse.pollingRate}
			<div class="card bg-base-200/50 shadow-sm">
				<div class="card-body p-4">
					<h4 class="font-semibold text-sm text-base-content/70 mb-2">Hardware</h4>
					<div class="space-y-2 text-sm">
						{#if mouse.model}
							<div class="flex justify-between gap-4">
								<span class="text-base-content/60">Model</span>
								<span class="font-medium text-right break-words">{mouse.model}</span>
							</div>
						{/if}
						{#if mouse.dpi}
							<div class="flex justify-between gap-4">
								<span class="text-base-content/60">DPI</span>
								<span class="font-medium">{mouse.dpi}</span>
							</div>
						{/if}
						{#if mouse.pollingRate}
							<div class="flex justify-between gap-4">
								<span class="text-base-content/60">Polling Rate</span>
								<span class="font-medium">{mouse.pollingRate} Hz</span>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/if}

		<!-- Sensitivity Settings -->
		{#if mouse.mouseSensitivity !== undefined || mouse.aimSensitivity !== undefined || mouse.freeCameraSensitivity !== undefined || hasScopeData}
			<div class="card bg-base-200/50 shadow-sm">
				<div class="card-body p-4">
					<h4 class="font-semibold text-sm text-base-content/70 mb-2">Sensitivity</h4>
					<div class="space-y-2 text-sm">
						{#if mouse.mouseSensitivity !== undefined}
							<div class="flex justify-between gap-4">
								<span class="text-base-content/60">Mouse Sensitivity</span>
								<span class="font-medium">{Number(mouse.mouseSensitivity).toFixed(2)}</span>
							</div>
						{/if}
						{#if mouse.aimSensitivity !== undefined}
							<div class="flex justify-between gap-4">
								<span class="text-base-content/60">Aim Sensitivity</span>
								<span class="font-medium">{Number(mouse.aimSensitivity).toFixed(2)}</span>
							</div>
						{/if}

						<!-- Scope Sensitivities (Expandable) - Only show if data exists -->
						{#if hasScopeData}
							<div class="divider my-2"></div>
							<button
								class="btn btn-xs btn-ghost w-full justify-between"
								onclick={() => (scopesExpanded = !scopesExpanded)}
								aria-expanded={scopesExpanded}
								aria-controls="scope-sensitivities"
							>
								<span>Scope Sensitivities ({Object.keys(mouse.scopeSensitivities).length})</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 transition-transform duration-200"
									class:rotate-180={scopesExpanded}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{#if scopesExpanded}
								<div id="scope-sensitivities" class="space-y-1.5 pl-2 mt-2">
									{#each sortedScopeSensitivities() as [scope, value] (scope)}
										<div class="flex justify-between text-xs gap-4">
											<span class="text-base-content/60">{scope}</span>
											<span class="font-medium">{Number(value).toFixed(2)}</span>
										</div>
									{/each}
								</div>
							{/if}
						{/if}

						{#if mouse.freeCameraSensitivity !== undefined}
							{#if hasScopeData || mouse.aimSensitivity !== undefined || mouse.mouseSensitivity !== undefined}
								<div class="divider my-2"></div>
							{/if}
							<div class="flex justify-between gap-4">
								<span class="text-base-content/60">Free Camera Sensitivity</span>
								<span class="font-medium">{Number(mouse.freeCameraSensitivity).toFixed(2)}</span>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/if}
	</div>
{:else}
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
		<span>No mouse settings available for this player yet.</span>
	</div>
{/if}
