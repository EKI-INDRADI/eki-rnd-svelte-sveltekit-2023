<script>
    //    ketik page ctrl+space
	import { page } from "$app/stores";

</script>

<h1>Error</h1>
<h2>Message: {$page.error?.message}</h2>
<h2>State Code : {$page.status}</h2>