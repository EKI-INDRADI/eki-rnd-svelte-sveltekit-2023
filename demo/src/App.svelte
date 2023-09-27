<script>
  import Funny from "./Funny.svelte";
  // let size = 150;
  //----------- move to Funny.svelte
  // setInterval(()=> {
  //   if ( size === 150) {
  //     size = 5
  //   } else {
  //     size += 1
  //   }
  // }, 10)
  //----------- move to Funny.svelte
  import MissionPossible from "./MissionPossible.svelte";
  let fontSize = 150;
  let color = "greenish";
</script>

<!-- <h1>Font Size: {size}</h1> -->
<!-- <Funny /> -->
<!-- <Funny fontSize={50} /> -->
<!-- == -->
<!-- <Funny fontSize={size} /> -->
<!-- == -->
<!-- <Funny bind:fontSize={size} /> -->
<!-- == -->

<h1>Font Size: {fontSize}</h1>
<MissionPossible {color}/>
<Funny {fontSize} />
