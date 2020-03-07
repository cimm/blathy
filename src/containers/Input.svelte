<script>
	import { createEventDispatcher } from 'svelte'
  import { CheckCircleIcon, ClockIcon } from 'svelte-feather-icons'

  export let type = 'text'
  export let placeholder = ''
  export let withDate = false

  let inputValue = ''
  let dateValue = new Date().toISOString().slice(0, 10)

	const dispatch = createEventDispatcher()

	function submit(evt) {
		dispatch('submit', { inputValue: inputValue, dateValue: dateValue })
  }

  function showDateInput(evt) {
    evt.target.parentNode.remove()
    document.querySelector('input[type=date]').style.display = 'block'
  }
</script>

<style>
  form {
    display: flex;
  }
  input {
    background-color: var(--paragraph-color);
    border-radius: 2rem;
    border-width: 0;
    padding: 0 1em;
    flex-grow: 1;
  }
  input[type=date] {
    display: none;
    margin-left: .5rem;
  }
  input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  button {
    background-color: transparent;
    border-width: 0;
    color: var(--highlight-color);
    cursor: pointer;
    height: 2rem;
    margin-left: .5rem;
    padding: 0;
  }
  button:hover {
    color: var(--link-color);
  }
</style>

<form on:submit|preventDefault={submit}>
  {#if type == 'text'}
    <input type='text' minlength='3' maxlength='20' required placeholder={placeholder} bind:value={inputValue}/>
  {:else if type == 'number'}
    <input type='number' inputmode='decimal' min='1' step='0.01' required placeholder={placeholder} bind:value={inputValue}/>
  {/if}

  {#if withDate}
    <button title='Modify date' on:click={showDateInput}>
      <ClockIcon/>
    </button>
  {/if}

  {#if true}
    <input type='date' max={dateValue} required bind:value={dateValue} />
  {/if}

  <button type='submit' title='Save'>
    <CheckCircleIcon/>
  </button>
</form>
