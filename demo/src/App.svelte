<script>
  let left = 100;
  let top = 100;

  function clickMe(e) {
    console.log(e);
    alert("clicked");
  }

  function onInput(e) {
    // console.log(e,'input')
    console.log(e.target.value, "input");
  }

  function onChange(e) {
    console.log(e, "change");
  }

  // function onKeyPressed(e) {
  //   console.log(e.key, e, "keyPressed");
  // }

  function onKeyUp(e) {
    // console.log(e.key, e, "keyUp");
    switch (e.key) {
      case "ArrowUp":
        top -= 10;
        break;
      case "ArrowDown":
        top += 10;
        break;
      case "ArrowUp":
        top -= 10;
        break;
      case "ArrowLeft":
        left -= 10;
        break;
      case "ArrowRight":
        left += 10;
        break;
    }
  }

  function handleSubmit(e) {
    // e.preventDefault()
    console.log("handleSubmit");
  }
</script>

<!-- <button on:click={clickMe}>Click Me</button> -->
<!-- click == process click -->
<!-- once == 1x click only -->

<button on:click|once={clickMe}>Click Me</button>

<!-- change == process changes -->
<input type="range" on:input={onInput} on:change={onChange} />

<!-- keypress ==  detect key press (press with hold) on page -->
<!-- <svelte:window on:keypress={onKeyPressed} /> -->

<!-- keyup ==  detect key up (after press) on page -->
<!-- <svelte:window on:keyup={onKeyUp} /> -->

<!-- keydown ==  detect key down (frist press without hold) on page -->
<svelte:window on:keydown={onKeyUp} />

<!-- submit == submit-->
<!-- <form on:submit={handleSubmit}> -->

<!-- stopPropagation == spesific submit & stop process other submit in same page or in same hierarchy -->
<!-- <form on:submit|stopPropagation={handleSubmit}> -->

<!-- preventDefault == without page reload-->
<form on:submit|stopPropagation|preventDefault={handleSubmit}>
  <button type="submit">Submit Form</button>
</form>

<div style="left: {left}px; top: {top}px;" />

<style>
  div {
    width: 100px;
    height: 100px;
    position: absolute;
    background-color: aqua;
  }
</style>
