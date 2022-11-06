<nav>
	<div>
		<a href="/">
			<h1 class="logo">Sveltr</h1>
		</a>
	</div>

	<div class="links">
		<a href="/about">About</a>
		<a href="/admin">Admin</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--size-8) 0 var(--size-10) 0;
	}

	.logo {
		font-weight: var(--font-weight-6);
		font-size: var(--font-size-3);
		text-transform: uppercase;
	}

	.links {
		display: flex;
		gap: var(--font-size-3);
	}
</style>
