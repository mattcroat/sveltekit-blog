<script lang="ts">
	export let meta = {
		title: 'Sveltr',
		description: 'Sveltr is a blog made with SvelteKit',
		image: 'Social image',
	}
</script>

<svelte:head>
	<title>{meta.title}</title>

	<meta content={meta.description} name="description" />

	<meta content={meta.title} property="og:title" />
	<meta content={meta.image} property="og:image" />
	<meta content="Your site URL" property="og:url" />
	<meta content={meta.description} property="og:description" />
	<meta content="Sveltr" property="og:site_name" />

	<meta content="@joyofcodedev" name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={meta.title} name="twitter:title" />
	<meta content={meta.description} name="twitter:description" />
	<meta content={meta.image} name="twitter:image" />
</svelte:head>
