<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte'

	import '../app.postcss'
</script>

<svelte:head>
	<title>Sveltr</title>
</svelte:head>

<div class="layout">
	<Navigation />
	<slot />
</div>

<style lang="postcss">
	.layout {
		max-width: 1200px;
		margin-inline: auto;
		padding: var(--size-8) 0;
	}
</style>
