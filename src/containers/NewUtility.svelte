<script>
  import Input from '../containers/Input.svelte'
  import { ArrowLeftIcon } from 'svelte-feather-icons'
  import { pop } from 'svelte-spa-router'
  import { utilities } from '../store.js'

  const newUtility = { id: randomID() }

  function addUtility(evt) {
    newUtility['name'] = evt.detail.inputValue
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
</style>

<header>
  <a href='#/' title='Back'>
    <ArrowLeftIcon/>
  </a>
  <h1>New Utility</h1>
</header>

<footer>
  <Input type='text' placeholder='New utility name' on:submit={addUtility}/>
</footer>
