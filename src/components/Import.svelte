<script>
  import { utilities, readings } from '../store.js'

  let files = []

  // JSON has no date type, we need to desrialize manually
  function dateParser(key, val) {
    if (typeof val === 'string' && dateFormat.test(val)) {
      return new Date(val)
    }
    return val
  }

  function importFile(evt) {
    const file = files[0]

    const reader = new FileReader()
    reader.onload = (e) => {
      const contents = JSON.parse(e.target.result)
      utilities.set(contents['utilities'].sort(byName))
      readings.set(contents['readings'].sort(byReadAt))
    }
    reader.readAsText(file)
  }

  function byName(a, b) {
    return a.name.localeCompare(b.name)
  }

  function byReadAt(a, b) {
    return a.readAt > b.readAt
  }
</script>

<form on:submit|preventDefault={importFile}>
  <input type='file' accept='application/json' bind:files />
  <button type='submit'>Import</button>
</form>
