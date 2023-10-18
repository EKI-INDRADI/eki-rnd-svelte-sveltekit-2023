<script>
    export let top = 100;
    export let left = 100;
    let moving = true;
    function startMove(event) {
        moving = true;
        // alert('hello')
        // console.log(event);
    }

    function stopMove(event) {
        moving = false;
        // alert('hello')
        // console.log(event);
    }

    function move(e) {
        //   console.log(e.movementX, e.movementY)

        if (moving) {
            left += e.movementX;
            top += e.movementY;
        }
    }
</script>

<!-- agar bs di geser-->
<div
    on:mousedown={startMove}
    on:mouseup={stopMove}
    style="left: {left}px; top: {top}px;"
    class="draggable"
>
    <slot />
</div>

<!-- agar bs di geser - deteksi kordinat  x-y dari mouse-->
<svelte:window on:mouseup={stopMove} on:mousemove={move} />

<style>
    /* agar kursor berubah menjadi icon drag */
    .draggable {
        user-select: none;
        position: absolute;
        border: solid gray 1px;
        cursor: move;
    }
</style>
