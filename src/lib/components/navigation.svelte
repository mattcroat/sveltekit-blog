<script lang="ts">
	import Theme from './theme.svelte'
</script>

<nav>
	<div>
		<h1 class="logo">
			<a href="/">Sveltr</a>
		</h1>
	</div>

	<div class="links">
		<a href="/about">About</a>
		<a href="/social">GitHub</a>
		<a href="/rss">RSS</a>
		<a href="/admin">Editor</a>
		<Theme />
	</div>
</nav>

<style lang="postcss">
	nav {
		margin-bottom: var(--size-8);

		@media (--small) {
			display: flex;
			justify-content: space-between;
		}

		& .logo {
			font-weight: var(--font-weight-6);
			font-size: var(--font-size-3);
			text-transform: uppercase;
		}

		& .links {
			display: flex;
			margin-top: 0;
			gap: var(--size-3);

			@media (--small) {
				display: flex;
				margin-top: 0;
				gap: var(--size-6);
			}
		}
	}
</style>
