<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte'

	import '../styles/app.postcss'
</script>

<svelte:head>
	<title>Sveltr</title>
</svelte:head>

<div>
	<div class="container">
		<Navigation />
	</div>
	<slot />
</div>
