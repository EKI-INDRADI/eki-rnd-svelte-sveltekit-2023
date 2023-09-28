<script>
  let name = "Ash";
  let fontSize = 30;
  let disabled = true;
  setTimeout(() => {
    name = "Carson";
  }, 1000);
</script>

<h1>Hello Svelte Developer</h1>
<!-- // vscode  type  "input:range" -->
<input type="range" bind:value={fontSize} min="30" max="1000" />
<!-- <h2>Font Size: {fontSize}px</h2> -->
<h2 style="font-size: {fontSize}px">Font Size: {fontSize}px</h2>
<h2>Hello {name}</h2>
<!-- 
  // not support changes
  <input type="text" value={name}>
 -->

<!-- //suport changes (bind) -->
<input type="text" bind:value={name} />

<!-- <button disabled={disabled}>Click Me</button> -->
<!-- or -->
<button {disabled}>Click Me</button>
