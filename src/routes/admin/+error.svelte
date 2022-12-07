<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="container">
	<hgroup>
		<h1>{$page.error?.message}</h1>
		<h2>Try refreshing the page or try again later.</h2>
	</hgroup>
</div>

<style>
	h1 {
		text-transform: capitalize;
	}
</style>
