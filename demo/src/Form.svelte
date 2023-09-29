<script>
    let name = "blue"   
    let age = 33
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    function onSubmit(e) {
        dispatch('form_submit',{
            // name : name,
            // age : age
            name,
            age
        })
    }
</script>


<form on:submit|preventDefault={onSubmit}>
    <label for="name">Name</label>
    <input type="text" bind:value={name} id="">
    <label for="age">Age</label>
    <input type="number" bind:value={age} id="">
    <button type="submit">Submit</button>
</form>


<button on:click>Click Me</button>