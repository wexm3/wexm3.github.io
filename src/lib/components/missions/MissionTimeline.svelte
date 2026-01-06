<script>
	import MissionCard from '$lib/components/MissionCard.svelte';

	let { character, missions, lastViewedMissionId, onMissionClick, onImageError } = $props();

	let loaded = $state(false);

	let scrollContainer = null;
	let isDown = false;
	let startX = 0;
	let scrollLeft = 0;

	function handleWheel(e) {
		if (scrollContainer) {
			e.preventDefault();
			scrollContainer.scrollLeft += e.deltaY;
		}
	}

	function handleMouseDown(e) {
		isDown = true;
		scrollContainer.style.cursor = 'grabbing';
		startX = e.pageX - scrollContainer.offsetLeft;
		scrollLeft = scrollContainer.scrollLeft;
	}

	function handleMouseLeave() {
		isDown = false;
		if (scrollContainer) {
			scrollContainer.style.cursor = 'grab';
		}
	}

	function handleMouseUp() {
		isDown = false;
		if (scrollContainer) {
			scrollContainer.style.cursor = 'grab';
		}
	}

	function handleMouseMove(e) {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - scrollContainer.offsetLeft;
		const walk = (x - startX) * 2;
		scrollContainer.scrollLeft = scrollLeft - walk;
	}
</script>

<div id="char-{character.id}" class="scroll-mt-6">
	<!-- Desktop: Horizontal Timeline -->
	<div class="hidden lg:block">
		<div class="mb-3 flex items-center gap-3">
			{#if !loaded}
				<div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
			{/if}
			<img
				src={character.avatar}
				alt={character.name}
				class="h-12 w-12 rounded-full object-cover"
				class:hidden={!loaded}
				onload={() => (loaded = true)}
				onerror={onImageError}
			/>
			<h3 class="text-2xl font-bold">{character.name}</h3>
			<div class="badge badge-neutral badge-sm">{missions.length} missions</div>
		</div>
		<div
			class="overflow-x-auto pb-6 cursor-grab select-none"
			bind:this={scrollContainer}
			onwheel={handleWheel}
			onmousedown={handleMouseDown}
			onmouseleave={handleMouseLeave}
			onmouseup={handleMouseUp}
			onmousemove={handleMouseMove}
		>
			<ul class="timeline timeline-horizontal">
				{#each missions as mission, index}
					<li>
						{#if index > 0}
							<hr class="bg-primary" />
						{/if}
						<div class="timeline-start mb-2 text-xs opacity-60">#{index + 1}</div>
						<div class="timeline-middle">
							<div class="h-3 w-3 rounded-full bg-primary"></div>
						</div>
						<div class="timeline-end">
							<MissionCard
								{mission}
								isLastViewed={mission.id === lastViewedMissionId}
								onclick={() => onMissionClick(mission)}
							/>
						</div>
						{#if index < missions.length - 1}
							<hr class="bg-primary" />
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- Mobile: Vertical Timeline -->
	<div class="lg:hidden">
		<div class="mb-2 flex items-center gap-3">
			{#if !loaded}
				<div class="skeleton h-10 w-10 shrink-0 rounded-full"></div>
			{/if}
			<img
				src={character.avatar}
				alt={character.name}
				class="h-10 w-10 rounded-full object-cover"
				class:hidden={!loaded}
				onload={() => (loaded = true)}
				onerror={onImageError}
			/>
			<h3 class="text-xl font-bold">{character.name}</h3>
			<div class="badge badge-neutral badge-sm">{missions.length} missions</div>
		</div>
		<ul class="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
			{#each missions as mission, index}
				<li>
					{#if index > 0}
						<hr class="bg-primary" />
					{/if}
					<div class="timeline-middle">
						<div class="h-3 w-3 rounded-full bg-primary"></div>
					</div>
					<div class="timeline-end mb-8 w-full">
						<div class="mb-1 text-xs font-semibold opacity-60">#{index + 1}</div>
						<MissionCard
							{mission}
							isLastViewed={mission.id === lastViewedMissionId}
							onclick={() => onMissionClick(mission)}
						/>
					</div>
					{#if index < missions.length - 1}
						<hr class="bg-primary" />
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	:global(.timeline-horizontal > li) {
		--timeline-row-start: minmax(0, 0.3fr);
	}
</style>
