<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<pre>
 {JSON.stringify(data.posts, null, 2)}
</pre>
