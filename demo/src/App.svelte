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
    // if (color !== '') { // allow duplicate
    if (color !== "" && !colorList.includes(color)) {
      // unique
      colorList = [color, ...colorList];
      color = "";
    } else {
      alert("Color must not be blank or already be in the list.");
    }
  }
</script>

<ul>
  <!-- {#each colorList as color}  << allow duplicate -->
  <!-- {#each colorList as color (color)} << unique -->

  <!--- Each Template -->

  <!-- {#each colorList as color (color)} 
    <li>{color}</li>
  {/each} -->

  <!--- /Each Template -->

  <!--- Each Template Id -->
  {#each colorList as color, index (color)}
    <li>{index + 1}) {color}</li>
  {/each}
  <!--- Each Template Id -->
</ul>

<input type="text" bind:value={color} />
<button on:click={addColor}>Add color</button>
