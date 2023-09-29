<script>
  let name = "Joe";
  // let capitalizedName = name.toUpperCase()  //  changes bind issue
  $: capitalizedName = name.toUpperCase(); // changes bind work
  let age = 33;
  $: dogYears = age * 7; // statement support changes bind

  let red = 10;
  let blue = 0;
  let green = 0;
let highGreen = false
  $: colorValue = color(red, green, blue);
  $: console.log(green)
  $: {
    console.log(green, "green")
    console.log(red, "red")
    console.log(blue, "blue")
  }

  $: if(green > 100) {
    highGreen =  true
  }

  function color(req, green, blue) {
    return `rgb{${red},${green},${blue}}`;
  }

  setTimeout(() => {
    green += 150;

  }, 1500);
</script>

<h2>{name}</h2>
<h2>{capitalizedName}</h2>
<input type="text" bind:value={name} />

<h2>Age : {age}</h2>
<h2>Dog years : {dogYears}</h2>
<input type="number" bind:value={age} />

<h2>Color Value : {colorValue}</h2>
<!-- <h2>Color Value : {color(red,green,blue)}</h2> -->
<h2>{highGreen ? 'HIGH' : 'LOW'} Green</h2>
