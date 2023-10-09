<script>
  // import store from "./stores/GeoLocation.Store";
  // const unsub = store.subscribe((info) => {
  //   console.log("info", info);
  // });

  // console.log(unsub);

  import GeoLocation from "./GeoLocation.svelte";
  let show = false
</script>


<input type="checkbox" bind:checked={show} />
{#if show}
<GeoLocation />
{/if}