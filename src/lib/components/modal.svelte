<script lang="ts">
	export let modal: HTMLDialogElement
	export let title: string
	export let text: string

	function closeModal() {
		modal.close()
	}
</script>

<dialog bind:this={modal}>
	<article>
		<h3>{title}</h3>
		<p>{text}</p>

		<footer>
			<button on:click={closeModal}>Close</button>
			<slot />
		</footer>
	</article>
</dialog>

<style>
	footer {
		display: flex;
		justify-content: flex-end;
		gap: var(--space-1);
	}
</style>
