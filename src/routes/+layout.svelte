<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte'

	import '../app.css'
</script>

<svelte:head>
	<title>Sveltr</title>
</svelte:head>

<div class="layout">
	<Navigation />
	<slot />
</div>

<style>
	.layout {
		max-width: 1200px;
		margin-inline: auto;
	}
</style>
