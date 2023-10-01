<script>
  // https://zenquotes.io/
  // https://docs.zenquotes.io/zenquotes-documentation/
  // https://zenquotes.io/api/random

  // chrome extention:  (new chrome block CORS)
  // https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf (install , pin , open http://localhost:5173/ & click pin C: / toggle on  )
  // https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related (install , pin , enable in site http://localhost:5173/  )

  async function getQuote() {
    const url = "https://zenquotes.io/api/random";
    const response = await fetch(url)
    // const response = await fetch(url, {
    //   // method: "GET",
    //   // redirect: "follow",
    //   // mode: 'no-cors',
    //   // mode: "cors",
    //   // headers: {
    //   //   "Access-Control-Allow-Origin": "*",
    //   //   // "Access-Control-Allow-Origin": "http://localhost:5173",
    //   //   // "Access-Control-Allow-Origin": "http://localhost::1",
    //   // },
    // });
    const [quoteInfo] = await response.json();
    return quoteInfo;

  }

  let promiseQuote = getQuote();

  function refreshQuote() {
      promiseQuote = getQuote()
    }
</script>

{#await promiseQuote}
  <h2>Loading Quote . . .</h2>
{:then quoteInfo}
  <h2>{quoteInfo.q}</h2>
  <h3>Author: {quoteInfo.a}</h3>
{:catch error}
  <h2>Error: {error.message}</h2>
{/await}

<button on:click={refreshQuote}>Refresh Quote</button>
