<script>
  import Reading from '../reading.js'
  import ReadingsChart from '../components/ReadingsChart.svelte'
  import { ArrowLeftIcon, PlusSquareIcon } from 'svelte-feather-icons'
  import { utilities, readings } from '../store.js'

  export let params

  const today = new Date().toISOString().slice(0, 10)
  let newReading = new Reading(params.utilityId)

  function addReading(evt) {
    readings.set([...$readings, newReading].sort(byReadAt))
    newReading = new Reading(params.utilityId)
  }

  function byReadAt(a, b) {
    return a.readAt > b.readAt
  }

  function lastReading() {
    if(utilityReadings.length == 0) { return 0 }
    return utilityReadings[utilityReadings.length-1].value
  }

  $: utilityName = $utilities.find(u => u.id === params.utilityId).name
  $: utilityReadings = $readings.filter(r => r.utilityId === params.utilityId)
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
    column-gap: .5rem;
    display: grid;
    grid-template-columns: auto auto 2rem;
  }
  input {
    height: 2rem;
    width: 90%;
  }
  button {
    background-color: transparent;
    border-width: 0;
    color: var(--highlight-color);
    cursor: pointer;
    height: 2rem;
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
  <h1>{utilityName}</h1>
</header>

<form on:submit|preventDefault={addReading}>
  <input type='number' placeholder={lastReading()} inputmode='decimal' min='1' step='0.01' required bind:value={newReading.value} />
  <input type='date' max={today} required bind:value={newReading.readAtAsString} />
  <button type='submit'>
    <PlusSquareIcon/>
  </button>
</form>

{#if utilityReadings}
  <ReadingsChart readings={utilityReadings}/>
{/if}
