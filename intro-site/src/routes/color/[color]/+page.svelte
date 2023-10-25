

<script>
    /** @type {import('./$types').PageLoad} */
    export let data;
</script>


<!-- http://localhost:5173/color/blue
http://localhost:5173/color/red -->
<div style="background-color: {data.color};">

</div>

<style>
    div {
        width: 400px;
        height: 400px;
    }
</style>