<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Div Creator Form</h1>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

{#if form && form.success}
	<h2>Your DIV</h2>
	<div style="width: {form.width}px; height: {form.height}px; background-color: {form.color}" />
{:else}
	<form method="POST">
		<label for="width">Width</label>
		<!-- with default after submit  === value={form?.width} -->
		<input id="width" type="number" name="width" value={form?.width === 0 ? '' : form?.width } />
		<!-- validation -->
		{#if form && form.error_width}
			<p>{form.error_width}</p>
		{/if}
		<br />
		<label for="height">Height</label>
		<!-- with default after submit  === value={form?.height} -->
		<input id="height" type="number" name="height" value={form?.height === 0 ? '' : form?.height} />
		<!-- validation -->
		{#if form && form.error_height}
			<p>{form.error_height}</p>
		{/if}
		<br />
		<label for="color">Color</label>
		<select name="color" id="color">
			<!-- <option value="red">Red</option>
			<option value="green">Green</option>
			<option value="blue">Blue</option> -->

            <!-- with default after submit-->
			<option selected={form?.color === 'red'} value="red">Red</option>
			<option selected={form?.color === 'green'} value="green">Green</option>
			<option selected={form?.color === 'blue'} value="blue">Blue</option>
		</select>

		<br />
		<!-- button:submit -->
		<button type="submit">Create Div</button>
	</form>
{/if}
