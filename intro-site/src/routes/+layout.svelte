<script>
	import { page } from '$app/stores';
	//https://kit.svelte.dev/docs/modules#$app-stores

	export let data;
</script>

<!-- <nav>
    <li><a href="/">Home</a></li>
	<li><a href="contact">Contact</a></li>
	<li><a href="about">About</a></li>
</nav> -->

<nav>

	<!-- class:active=true/false untuk mendeteksi link active-->
	<li><a class:active={$page.url.pathname === '/'} data-sveltekit-preload-data href="/">Home</a></li>
	<li><a class:active={$page.url.pathname === '/contact'} data-sveltekit-preload-data href="contact">Contact</a></li>
	<li><a class:active={$page.url.pathname === '/about'} data-sveltekit-preload-data href="about">About</a></li>
	<!-- https://kit.svelte.dev/docs/link-options -->
</nav>

<!-- <h1>{data.name}</h1>
<h2>Path : {$page.url.pathname}</h2> -->

<main>
	<slot />
</main>

<style>
	.active {
		color: salmon;
	}
</style>
