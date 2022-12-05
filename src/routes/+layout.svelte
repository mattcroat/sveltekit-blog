<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte'

	import '@picocss/pico'
	import '../styles/app.postcss'
</script>

<svelte:head>
	<title>Sveltr</title>
</svelte:head>

<div>
	<Navigation />
	<slot />
</div>
