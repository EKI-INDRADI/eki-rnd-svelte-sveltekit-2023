<script>
	/** @type {import('./$types').ActionData} */
	export let form;

    import { enhance } from '$app/forms';
</script>

<h1>Contact</h1>
<!-- http://localhost:5173/contact -->

<!-- https://kit.svelte.dev/docs/form-actions -->

{#if form && form.success}
	<h2>Message Received</h2>
{:else}
	<!-- <form method="POST"> -->
    <form use:enhance method="POST"> <!--- NO RELOAD POST-->
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />
		<br />

		<!-- validation -->
		{#if form && form.email}
			<p>{form.email}</p>
		{/if}
		<!-- /validation -->
		<label for="Message">Message</label>
		<br />
		<textarea name="message" id="message" cols="30" rows="10" />
		<br />
		<!-- validation -->
		{#if form && form.message}
			<p>{form.message}</p>
		{/if}
		<!-- /validation -->
		<button type="submit">Send Message</button>
	</form>
{/if}
