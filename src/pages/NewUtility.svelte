<script>
  import { ArrowLeftIcon, PlusSquareIcon } from 'svelte-feather-icons'
  import { pop } from 'svelte-spa-router'
  import { utilities } from '../store.js'

  const newUtility = { id: randomID() }

  function addUtility(evt) {
    utilities.set([...$utilities, newUtility].sort(byName))
    pop()
  }

  function randomID() {
    return Math.random().toString(32).slice(2)
  }

  function byName(a, b) {
    return a.name.localeCompare(b.name)
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
  a:hover {
    color: var(--link-color);
  }
  form {
    text-align: center;
  }
  input {
    height: 2rem;
  }
  button {
    background-color: transparent;
    border-width: 0;
    color: var(--highlight-color);
    cursor: pointer;
    height: 2rem;
    margin-left: .5rem;
    padding: 0;
    vertical-align: bottom;
    width: 2rem;
  }
  button:hover {
    color: var(--link-color);
  }
</style>

<header>
  <a href='#/' title='Back'>
    <ArrowLeftIcon/>
  </a>
  <h1>New Utility</h1>
</header>

<form on:submit|preventDefault={addUtility}>
  <input type='text' minlength='3' maxlength='20' placeholder='Utility name' required bind:value={newUtility.name} />
  <button type='submit'>
    <PlusSquareIcon/>
  </button>
</form>
