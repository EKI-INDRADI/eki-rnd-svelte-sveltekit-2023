<script>
  import Box from "./Box.svelte";
</script>

<Box>
  <!-- <h1>Hellow World</h1> -->
  <!-- buat box tanpa hrs buat css, dengan slot component -->
  <h1 slot="top">Hellow World</h1>
  <h2 slot="middle">Hi</h2>
  <div slot="bottom">
    <p>Hello how are you doing?</p>
    <p>Hi</p>
  </div>
</Box>
