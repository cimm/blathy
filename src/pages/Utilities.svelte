<script>
  import { utilities } from '../store.js'
  import { push } from 'svelte-spa-router'

  const newUtility = { id: randomID() }

  function addUtility(evt) {
    utilities.set([...$utilities, newUtility].sort(byName))
    push('/')
  }

  function randomID() {
    return Math.random().toString(32).slice(2)
  }

  function byName(a, b) {
    return a.name.localeCompare(b.name)
  }
</script>

<form on:submit|preventDefault={addUtility}>
  <input type='text' minlength='3' maxlength='20' required bind:value={newUtility.name} />
  <button type='submit'>Add</button>
  or
  <a href='#/'>cancel</a>
</form>
