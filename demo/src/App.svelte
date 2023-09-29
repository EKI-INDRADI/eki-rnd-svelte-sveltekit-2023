<script>
  // import Form from "./Form.svelte";
  import Container from "./Container.svelte";
  import ChildEvent from "./ChildEvent.svelte";
  function onFormSubmit(e) {
    console.log(e);
    const { name, age } = e.detail;
    console.log(name, age, "detail from event");
  }

  function onCustomEvent(e) {
    alert(e.detail)
  }
</script>

<!-- <Form on:form_submit={onFormSubmit} /> -->
<Container
  on:click={() => alert("was clicked")}
  on:form_submit={onFormSubmit}
/>

<!-- on:click|once={() => alert("was clicked")} -->


<ChildEvent on:custom_event={onCustomEvent}/>