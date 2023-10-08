<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

    // chrome extention:  (new chrome block CORS)
    // https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf (install , pin , open http://localhost:5173/ & click pin C: / toggle on  )
    // https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related (install , pin , enable in site http://localhost:5173/  )

    // API DOCS https://zenquotes.io/
    // https://docs.zenquotes.io/zenquotes-documentation/
    // https://zenquotes.io/api/random/[your_key]
    // https://zenquotes.io/api/random

    let quote = "";
    let error = false;
    let loading = true;
    // onMount(() => {
    // onMount(async () => {
    //     // == ngOnInit / costructor angular
    //     try {
    //         const url = "https://zenquotes.io/api/random";
    //         const response = await fetch(url);
    //         const [quoteMessage] = await response.json();
    //         quote = quoteMessage.q;
    //     } catch (e) {
    //         error = true;
    //     }
    //     loading = false;

    //     // console.log("mounted");

    //     // return () => {
    //     //     // this process execute after on destroy
    //     //     console.log("also destroyed");
    //     // };
    // });

    let numbers = [];
    let unorderListElment; //    <<< keperluan scroll  biar selalu paling terakhir
    let autoScroll = false
    
    onMount(() => {
        // 1. execute after beforeUpdate
        // console.log("on mount");

        const intervalid = setInterval(() => {
            numbers = [...numbers, numbers.length + 1];
        }, 1000);
        return () => {
            clearInterval(intervalid);
            console.log("also destroyed");
        };
    });

    beforeUpdate(() => {
        // 0. execute first
        console.log("before update");
        // unorderListElment.scrollTo(0, unorderListElment.scrollHeight)
    });

    afterUpdate(() => {
        // 2. execute after onMount
        console.log("after update");
        //    unorderListElment <<< keperluan scroll  biar selalu paling terakhir
      if (autoScroll) {
        unorderListElment.scrollTo(0, unorderListElment.scrollHeight);
      }
      
    });

    onDestroy(() => {
        // uncheck (clear memory)
        // clear memory
        console.log("on destroy");
    });
</script>

<!-- <h2>Showing</h2> -->
<!-- 
{#if loading}
    <h2>Loading...</h2>
{:else if error}
    <h2>Quote API not working</h2>
{:else}
    <h2>{quote}</h2>
{/if} -->

<!-- <h2>Mounted</h2> -->

<ul bind:this={unorderListElment}>
    <!-- unorderListElment <<< keperluan scroll -->
    {#each numbers as number (number)}
        <li>{number}</li>
    {/each}
</ul>

<label >Auto Scroll <input type="checkbox" bind:checked={autoScroll}></label>

<style>
    ul {
        max-height: 100px;
        border: solid black 1px;
        overflow: scroll;
    }
</style>
