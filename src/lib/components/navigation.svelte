<script lang="ts">
	import Theme from './theme.svelte'
</script>

<nav>
	<div>
		<a class="logo" href="/">Sveltr</a>
	</div>

	<div class="links">
		<a href="/about">About</a>
		<a href="/github">GitHub</a>
		<a href="/rss.xml">RSS</a>
		<a href="/admin">Admin</a>
		<Theme />
	</div>
</nav>

<style lang="postcss">
	nav {
		@media (--sm) {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	.logo {
		font-weight: 600;
		font-size: var(--fs-3);
		text-transform: uppercase;
	}

	.links {
		display: grid;
		margin-top: var(--space-3);
		gap: var(--space-4);

		@media (--sm) {
			grid-auto-flow: column;
			margin-top: 0;
		}

		& a {
			font-size: var(--fs-2);
			transition: color 0.3s ease;

			&:hover {
				color: var(--clr-brand);
				text-decoration: underline;
				text-decoration-thickness: 2px;
				text-underline-offset: 8px;
			}
		}
	}
</style>
