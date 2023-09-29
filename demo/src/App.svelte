<script>
  let colorList = ["red", "green", "blue", "purple"];
  // setTimeout(() => {
  // colorList.push("bluish");
  // colorList = colorList
  // or
  //  colorList = [...colorList,'bluish']
  // }, 2000);

  let color = "";

  function addColor() {
    // if (color !== "") { // allow duplicate
    if (color !== "" && !colorList.includes(color)) { // unique
      colorList = [color, ...colorList];
    } else {
      alert('Color must not be blank or already be in the list.')
    }
  }
</script>

<ul>

  <!-- {#each colorList as color}  << allow duplicate -->
  <!-- {#each colorList as color (color)} << unique -->
  
  <!-- {#each colorList as color (color)} 
    <li>{color}</li>
  {/each} -->

  {#each colorList as color, index (color)} 
  <li>{index + 1}) {color}</li>
{/each}
</ul>

<input type="text" bind:value={color} />
<button on:click={addColor}>Add color</button>
