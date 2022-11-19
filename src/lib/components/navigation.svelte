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

<nav class="sm:max-w-screen-xl sm:mx-auto px-8 mt-12">
	<div class="sm:flex sm:justify-between sm:items-center">
		<div>
			<a class="text-xl font-semibold uppercase" href="/">Sveltr</a>
		</div>

		<div class="grid gap-8 mt-6 sm:grid-flow-col sm:mt-0">
			{#each links as link}
				<a
					class="hover:text-red-400 hover:decoration-2 hover:underline hover:underline-offset-8 transition-colors"
					href={link.href}
				>
					{link.text}
				</a>
			{/each}
			<Theme />
		</div>
	</div>
</nav>
