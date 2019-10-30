<script>
  import { utilities, readings } from '../store.js'

  let files = []

  function importFile(evt) {
    const file = files[0]

    const reader = new FileReader()
    reader.onload = (e) => {
      const contents = JSON.parse(e.target.result)
      utilities.set(contents['utilities'].sort(byDate))
      readings.set(contents['readings'].sort(byDate))
    }
    reader.readAsText(file)
  }

  function byDate(a, b) {
    return a.date > b.date
  }
</script>

<form on:submit|preventDefault={importFile}>
  <input type='file' accept='application/json' bind:files />
  <button type='submit'>Import</button>
</form>
