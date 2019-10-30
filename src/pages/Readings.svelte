<script>
  import { readings } from '../store.js'
  import { push } from 'svelte-spa-router'
  import Chart from '../components/Chart.svelte'

  export let params

  $: utilityReadings = $readings.filter(r => r.utilityId === params.utilityId)
  $: readingValues = utilityReadings.map(r => r.value)
  $: readingDates = utilityReadings.map(r => r.date)

  const today = new Date().toISOString().slice(0, 10)
  let newReading = { utilityId: params.utilityId, date: today }

  function addReading(evt) {
    readings.set([...$readings, newReading].sort(byDate))
    newReading = { utilityId: params.utilityId, date: today }
  }

  function byDate(a, b) {
    return a.date > b.date
  }
</script>

<form on:submit|preventDefault={addReading}>
  <input type='number' min='1' step='0.01' required bind:value={newReading.value} />
  <input type='date' max={today} required bind:value={newReading.date} />
  <button type='submit'>Add</button>
  or
  <a href='#/'>cancel</a>
</form>

<Chart data={readingValues} labels={readingDates}/>
