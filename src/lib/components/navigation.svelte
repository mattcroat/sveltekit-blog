<script lang="ts">
	import Theme from './theme.svelte'

	// todo: config file?
	const links = [
		{ text: 'About', href: '/about' },
		{ text: 'GitHub', href: '/github' },
		{ text: 'RSS', href: '/rss.xml' },
		{ text: 'Admin', href: '/admin' },
	]
</script>

<nav>
	<div class="sm:flex sm:justify-between sm:items-center">
		<div>
			<a class="text-xl font-semibold uppercase" href="/">Sveltr</a>
		</div>

		<div class="grid sm:grid-flow-col gap-8 mt-6 sm:mt-0">
			{#each links as link}
				<a
					class="hover:text-red-600 dark:hover:text-red-400 hover:decoration-2 hover:underline hover:underline-offset-8 transition-colors"
					href={link.href}
				>
					{link.text}
				</a>
			{/each}
			<Theme />
		</div>
	</div>
</nav>
