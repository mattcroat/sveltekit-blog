<script lang="ts">
	import { Toaster } from 'svelte-french-toast'
</script>

<Toaster
	toastOptions={{
		duration: 2000,
		style:
			'padding: var(--space-2); background: var(--clr-bg-toast); color: var(--clr-text-toast); border-radius: var(--round-1);',
	}}
/>
