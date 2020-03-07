<script>
  import Chart from '../components/Chart.svelte'
  import Input from '../containers/Input.svelte'
  import Reading from '../reading.js'
  import { ArrowLeftIcon, PlusSquareIcon } from 'svelte-feather-icons'
  import { utilities, readings } from '../store.js'

  export let params

  let newReading = new Reading(params.utilityId)

  function addReading(evt) {
    newReading.valueAsString = evt.detail.inputValue
    newReading.readAtAsString = evt.detail.dateValue
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
</style>

<header>
  <a href='#/' title='Back'>
    <ArrowLeftIcon/>
  </a>
  <h1>{utilityName}</h1>
</header>

{#if utilityReadings}
  <Chart readings={utilityReadings}/>
{/if}

<footer>
  <Input type='number' withDate={true} placeholder={lastReading()} on:submit={addReading}/>
</footer>
