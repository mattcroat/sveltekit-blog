<script lang="ts">
	import Theme from './theme.svelte'
</script>

<nav class="mt-5">
	<div class="container">
		<div class="flex-md justify-between items-center">
			<div>
				<a class="fs-2 font-semibold uppercase" href="/">Sveltr</a>
			</div>

			<div class="navigation grid mt-3">
				<a href="/about">About</a>
				<a href="/social">GitHub</a>
				<a href="/rss">RSS</a>
				<a href="/admin">Editor</a>
				<Theme />
			</div>
		</div>
	</div>
</nav>

<style lang="postcss">
	.navigation {
		--gap: var(--space-2);

		@media (--md) {
			--gap: var(--space-4);

			grid-auto-flow: column;
			margin-top: 0;
		}
	}

	.navigation > a:hover {
		color: var(--brand);
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 6px;
	}
</style>
