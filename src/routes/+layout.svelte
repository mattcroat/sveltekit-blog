<script lang="ts">
	import Toasts from '$lib/components/toasts.svelte'
	import Navigation from '$lib/components/navigation.svelte'
	import Seo from '$lib/components/seo.svelte'

	import '@picocss/pico'
	import '../styles/app.postcss'
</script>

<Toasts />
<Seo />

<div>
	<Navigation />
	<slot />
</div>
