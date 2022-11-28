<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte'

	import '../styles/app.postcss'
</script>

<svelte:head>
	<title>Sveltr</title>
</svelte:head>

<div>
	<div class="sm:max-w-screen-xl sm:mx-auto px-8 mt-12">
		<Navigation />
	</div>
	<slot />
</div>
