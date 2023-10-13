<script>
  import { onDestroy } from 'svelte';
  import contactStore from './store/contact.store';
  let name = '';
  let phone = '';
  let description = '';
  $: title = $contactStore.editId ? 'Edit Contact' : 'Add Contact';
  function handleSubmit() {
    if ($contactStore.editId === undefined) {
      contactStore.add(name, phone, description);
    } else {
      contactStore.edit($contactStore.editId, name, phone, description);
    }

    name = '';
    description = '';
    phone = '';
  }

  
  const unsub = contactStore.subscribe(({ contacts, editId }) => {
    if (!editId) return;
    const contact = contacts.find((c) => c.id === editId);
    name = contact.name;
    description = contact.description;
    phone = contact.phone;
  });

  onDestroy(() => { // void
    unsub();
  });
</script>

<!-- div.row>div.column -->
<div class="row">
    <div class="column">
        <h3>{title}</h3>
    </div>
</div>
<div class="row">
    <div class="column">
        <form on:submit|preventDefault={handleSubmit}>
            <fieldset>
                <label for="nameField">Name</label>
                <input
                    bind:value={name}
                    type="text"
                    placeholder="Eki Indradi"
                    id="nameField"
                />
                <label for="phoneField">Phone</label>
                <input
                    bind:value={phone}
                    type="tel"
                    placeholder="555-5555"
                    id="phoneField"
                />
                <label for="description">Description</label>
                <textarea bind:value={description} id="description" />
                <!-- <label for="ageRangeField">Age Range</label> -->
                <!-- <select id="ageRangeField">
                <option value="0-13">0-13</option>
                <option value="14-17">14-17</option>
                <option value="18-23">18-23</option>
                <option value="24+">24+</option>
              </select> -->

                <!-- <div class="float-right">
                <input type="checkbox" id="confirmField">
                <label class="label-inline" for="confirmField">Send a copy to yourself</label>
              </div> -->

                <button class="button" type="submit">{title}</button>
            </fieldset>
        </form>

        <!-- Always wrap checkbox and radio inputs in a label and use a `.label-inline` inside of it -->
    </div>
</div>
