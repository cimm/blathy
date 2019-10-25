<script>
  import { utilities } from '../store.js'
  import { push } from 'svelte-spa-router'

  let newUtility = { id: randomID() }

  function addUtility(event) {
    utilities.set([...$utilities, newUtility])
    push('/')
  }

  function randomID() {
    return Math.random().toString(32).slice(2)
  }
</script>

<form on:submit|preventDefault={addUtility}>
  <input bind:value={newUtility.name} type='text' minlength=3 maxlength=20 required/>
  <button type='submit'>Add</button>
  or
  <a href='#/'>cancel</a>
</form>
