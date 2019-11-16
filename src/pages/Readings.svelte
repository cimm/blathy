<script>
  import ReadingsChart from '../components/ReadingsChart.svelte'
  import { push } from 'svelte-spa-router'
  import { readings } from '../store.js'
  import Reading from '../reading.js'

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

  $: utilityReadings = $readings.filter(r => r.utilityId === params.utilityId)
</script>

<form on:submit|preventDefault={addReading}>
  <input type='number' min='1' step='0.01' required bind:value={newReading.value} />
  <input type='date' max={today} required bind:value={newReading.readAtAsString} />
  <button type='submit'>Add</button>
  or
  <a href='#/'>cancel</a>
</form>

<ReadingsChart readings={utilityReadings}/>
