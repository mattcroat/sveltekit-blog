<script lang="ts">
	import Theme from './theme.svelte'
</script>

<nav class="mt-5">
	<div class="container flex justify-between items-center">
		<div>
			<a class="size-3 font-semibold uppercase" href="/">Sveltr</a>
		</div>

		<div class="links flex" style:--gap="var(--size-6)">
			<a href="/about">About</a>
			<a href="/social">GitHub</a>
			<a href="/rss">RSS</a>
			<a href="/admin">Editor</a>
			<Theme />
		</div>
	</div>
</nav>

<style lang="postcss">
	.links > a:hover {
		color: var(--brand);
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 6px;
	}
</style>
