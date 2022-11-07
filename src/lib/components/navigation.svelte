<nav>
	<div>
		<a href="/">
			<h1 class="logo">Sveltr</h1>
		</a>
	</div>

	<div class="links">
		<a href="/about">About</a>
		<a href="/social">Twitter</a>
		<a href="/rss">RSS</a>
		<a href="/admin">Admin</a>
	</div>
</nav>

<style>
	nav {
		padding: var(--size-6) 0;
	}

	.logo {
		font-weight: var(--font-weight-6);
		font-size: var(--font-size-3);
		text-transform: uppercase;
	}

	.links {
		display: grid;
		margin-top: var(--size-6);
		gap: var(--size-3);
	}

	@media (min-width: 480px) {
		nav {
			display: flex;
			justify-content: space-between;
			padding: var(--size-8) 0 var(--size-10) 0;
		}

		.links {
			display: flex;
			margin-top: 0;
			gap: var(--size-3);
		}
	}
</style>
