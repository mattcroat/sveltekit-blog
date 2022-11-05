<script lang="ts">
	import '../app.css'
</script>

<div class="content">
	<slot />
</div>

<style>
	.content {
		max-width: 1280px;
		display: grid;
		justify-content: center;
		margin-inline: auto;
		padding: var(--size-6);
	}
</style>
