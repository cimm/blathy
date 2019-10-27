<script>
  import { readings } from '../store.js'
  import Chart from '../components/Chart.svelte'

  export let params

  $:utilityReadings = $readings.filter(r => r.utilityId === params.utilityId).sort(byDate)
  $: readingValues = utilityReadings.map(r => r.value)
  $: readingDates = utilityReadings.map(r => r.date)

  const today = new Date().toISOString().slice(0, 10)
  let newReading = { utilityId: params.utilityId, date: today }

  function addReading(event) {
    readings.set([...$readings, newReading])
    newReading = { utilityId: params.utilityId, date: today }
  }

  function byDate(a, b) {
    return a.date > b.date
  }
</script>

<form on:submit|preventDefault={addReading}>
  <input bind:value={newReading.value} type='number' min='1' step='0.01' required/>
  <input bind:value={newReading.date} type='date' max={today} required/>
  <button type='submit'>Add</button>
  or
  <a href='#/'>cancel</a>
</form>

<Chart data={readingValues} labels={readingDates}/>
