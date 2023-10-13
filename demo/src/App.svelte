<script>
  import { onDestroy } from "svelte";
  import countStore from "./stores/count.store";
  //  countStore.subscribe((n) => {
  //     console.log(n, "count store");
  //   });

  const unsub = countStore.subscribe((n) => {
    console.log(n, "count store");
  });

  function add() {
    // countStore.update((n) => {
    //   return n + 1;
    // });
    countStore.addOne()
  }

  function minus() {
    // countStore.update((n) => {
    //   return n - 1;
    // });
    countStore.monusOne()
  }



  // setTimeout(() => {
  //   countStore.set(2000);
  // }, 2000);

  // setTimeout(() => {
  //   countStore.update((n) => {
  //     return n + 300;
  //   });
  // }, 2000);

  onDestroy(() => {
    unsub();
  });
</script>

<!-- <h2>{$countStore}</h2> -->

<h2>{$countStore}</h2>

<button on:click={add}>+</button>
<button on:click={minus}>-</button>
<button on:click={()=> countStore.multiplyByThree()}>time 3</button>