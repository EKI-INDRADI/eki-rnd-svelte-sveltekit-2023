<script>
  import Fun from "./Fun.svelte";
</script>

<h1>Hello Svelte Developer</h1>
<h2>You Rock!!</h2>
<Fun />
<style>
  h1 {
    color : red;
  }

  h2 {
    color : blue;
  }

  /* 
  
  include <Fun /> (not recomended) 
  
  :global(h2) {
    color : blue;
  } 

  recomended 
  create ./src/global.css
  update ./src/main.js

  
  */

</style>