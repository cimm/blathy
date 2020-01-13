<script>
  import { UploadIcon } from 'svelte-feather-icons'
  import { push } from 'svelte-spa-router'
  import { utilities, readings } from '../store.js'

  let files = []
  const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

  // JSON has no date type, we need to desrialize manually
  function dateParser(key, val) {
    if (typeof val === 'string' && dateFormat.test(val)) {
      return new Date(val)
    }
    return val
  }

  function importFile(evt) {
    let answer = confirm('This will erase all utility and readings, are you sure?')
    if (answer == false) { return }

    const file = files[0]

    const reader = new FileReader()
    reader.onload = (e) => {
      const contents = JSON.parse(e.target.result, dateParser)
      utilities.set(contents['utilities'].sort(byName))
      readings.set(contents['readings'].sort(byReadAt))
    }
    reader.readAsText(file)
    push('#/')
  }

  function byName(a, b) {
    return a.name.localeCompare(b.name)
  }

  function byReadAt(a, b) {
    return a.readAt > b.readAt
  }
</script>

<style>
  input[type=file] {
    display: none;
  }
  form {
    width: 2rem;
    height: 2rem;
  }
  label:hover {
    cursor: pointer;
    filter: brightness(5);
  }
</style>

<form title='Import from file' on:submit|preventDefault={importFile}>
  <label>
    <input type='file' accept='application/json' bind:files on:change={importFile}/>
    <UploadIcon/>
  </label>
</form>
