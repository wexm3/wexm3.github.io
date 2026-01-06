<script>
	let { category, code, isCopied, onCopy } = $props();
</script>

<div class="card bg-base-200/50 shadow-sm hover:shadow-md transition-shadow">
	<div class="card-body p-4">
		<h3 class="card-title text-base mb-2">{category}</h3>
		<div class="flex gap-2 items-center">
			<!-- FIXED: Improved keyboard support and accessibility -->
			<code
				class="flex-1 px-3 py-2 bg-base-300 rounded text-sm font-mono break-all cursor-pointer hover:bg-base-300/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
				onclick={onCopy}
				role="button"
				tabindex="0"
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						onCopy();
					}
				}}
				aria-label="Click to copy {category} code"
			>
				{code}
			</code>
			<button
				class="btn btn-square btn-sm"
				class:btn-success={isCopied}
				onclick={onCopy}
				aria-label={isCopied ? `${category} code copied` : `Copy ${category} code`}
				aria-live="polite"
			>
				{#if isCopied}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>
</div>
