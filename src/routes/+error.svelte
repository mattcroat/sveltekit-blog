<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="container">
	<hgroup>
		<h1>{$page.error?.message}</h1>
		<h2>The resource you requested is in another castle.</h2>
	</hgroup>

	<a href="/">Return to the home page</a>.
</div>

<style>
	.container {
		--padding-block: var(--space-7);
	}

	h1 {
		text-transform: capitalize;
	}

	a {
		color: var(--clr-text);
		text-decoration: underline;
		text-underline-offset: 6px;
	}
</style>
