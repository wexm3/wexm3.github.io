<script>
	let { isOpen, mission, character, onClose, onImageError } = $props();
</script>

{#if isOpen && mission}
	<dialog class="modal" class:modal-open={isOpen}>
		<div class="modal-box max-w-2xl">
			<!-- Character Info -->
			<div class="mb-4 flex items-center gap-3">
				<img
					src={character?.avatar}
					alt={character?.name}
					class="h-16 w-16 rounded-full object-cover"
					onerror={onImageError}
				/>
				<div>
					<h3 class="text-2xl font-bold">{mission.title}</h3>
					<p class="text-sm opacity-70">{character?.name}</p>
				</div>
			</div>

			<!-- Objectives -->
			<div class="mb-6">
				<h4 class="mb-3 text-lg font-semibold">Objectives</h4>
				<ul class="space-y-2">
					{#each mission.objectives as objective}
						<li class="flex items-start gap-2">
							<div class="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"></div>
							<span>{objective}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Rewards -->
			<div class="mb-6">
				<h4 class="mb-3 text-lg font-semibold">Rewards</h4>
				<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
					<div class="card bg-base-200">
						<div class="card-body p-4">
							<div class="text-xs opacity-70">Experience</div>
							<div class="text-xl font-bold">{mission.rewards.xp.toLocaleString()} XP</div>
						</div>
					</div>
					<div class="card bg-base-200">
						<div class="card-body p-4">
							<div class="text-xs opacity-70">Money</div>
							<div class="text-xl font-bold">{mission.rewards.koen.toLocaleString()} K</div>
						</div>
					</div>
					{#if mission.rewards.items?.length > 0}
						{#each mission.rewards.items as item}
							<div class="card bg-base-200">
								<div class="card-body p-4">
									<div class="text-xs opacity-70">Item</div>
									<div class="font-semibold">{item}</div>
								</div>
							</div>
						{/each}
					{/if}
				</div>
			</div>

			<!-- Close Button -->
			<div class="modal-action">
				<button class="btn" onclick={onClose}>Close</button>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button onclick={onClose}>close</button>
		</form>
	</dialog>
{/if}
