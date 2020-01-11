<script>
  import AlertBox from '../components/AlertBox.svelte'
  import { pop } from 'svelte-spa-router'
  import { ArrowLeftIcon, FolderPlusIcon } from 'svelte-feather-icons'
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
    let answer = confirm('This will erase all utility and readings, are you sure?')
    if (answer == false) { return }
    console.debug('[Blàthy] Starting JSON import…')

    const file = files[0]

    const reader = new FileReader()
    reader.onload = (e) => {
      const contents = JSON.parse(e.target.result)
      utilities.set(contents['utilities'].sort(byName))
      readings.set(contents['readings'].sort(byReadAt))
    }
    reader.readAsText(file)
    pop()
  }

  function byName(a, b) {
    return a.name.localeCompare(b.name)
  }

  function byReadAt(a, b) {
    return a.readAt > b.readAt
  }
</script>

<style>
  header {
    align-items: center;
    display: grid;
    grid-template-columns: 3rem 1fr;
  }
  a {
    color: var(--highlight-color);
    display: block;
    height: 2rem;
    width: 2rem;
  }
  a:hover, label:hover {
    filter: brightness(5);
  }
  form {
    margin: 2rem;
  }
  input[type=file] {
    display: none;
  }
  label {
    color: var(--highlight-color);
    cursor: pointer;
    display: block;
    height: 4em;
    line-height: 1;
    margin: 0 auto;
    width: 4em;
  }
</style>

<header>
  <a href='#/' title='Back'>
    <ArrowLeftIcon/>
  </a>
  <h1>Import</h1>
</header>

<AlertBox body='Importing a Blàthy backup file will erase all existing data!'/>

<form on:submit|preventDefault={importFile}>
  <label>
    <FolderPlusIcon/>
    <input type='file' accept='application/json' bind:files on:change={importFile}/>
    browse…
  </label>
</form>
