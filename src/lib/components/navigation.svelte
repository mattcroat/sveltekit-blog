<script lang="ts">
	import Theme from './theme.svelte'

	const links = [
		{ url: '/about', text: 'About' },
		{ url: '/github', text: 'GitHub' },
		{ url: '/rss.xml', text: 'RSS' },
		{ url: '/admin', text: 'Admin' },
	]
</script>

<nav class="container">
	<ul>
		<li>
			<a class="logo" href="/">Sveltr</a>
		</li>
	</ul>

	<ul class="links">
		{#each links as { url, text }}
			<li>
				<a href={url}>{text}</a>
			</li>
		{/each}

		<li>
			<Theme />
		</li>
	</ul>
</nav>

<style lang="postcss">
	nav {
		display: block;
		margin-top: var(--space-4);

		@media (--sm) {
			display: flex;
		}
	}

	.logo {
		color: var(--clr-text);
		font-weight: 600;
		font-size: var(--fs-2);
		text-transform: uppercase;
	}

	.links {
		flex-direction: column;
		align-items: start;
		margin-top: var(--space-2);
		color: var(--clr-text);

		@media (--sm) {
			flex-direction: row;
			align-items: center;
			margin-top: 0;
			gap: var(--space-4);
		}

		& :last-of-type {
			padding-inline: 0;
		}

		& a {
			padding: 0;
			font-size: var(--fs-1);
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
