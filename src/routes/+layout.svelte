<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte'
	import Seo from '$lib/components/seo.svelte'

	import '@picocss/pico'
	import '../styles/app.postcss'
</script>

<Seo />

<div>
	<Navigation />
	<slot />
</div>
