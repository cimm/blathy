<script>
  import Chart from 'svelte-frappe-charts'
  import Resampler from '../resampler.js'
  import dayjs from 'dayjs'

  export let readings

  $: readingsAsDiffs = readings.map((reading, i) => {
    let diff = reading.value
    if(readings[i-1] != undefined) {
      diff = reading.value - readings[i-1].value
    }
    return [reading.readAt, diff]
  })

  // Convert irregular timeseries to monthly points
  $: resampledReadings = new Resampler(readingsAsDiffs).toMonths()

  $: data = {
    labels: resampledReadings.map(x => dayjs(x[0]).format('M/YYYY')),
    datasets: [
      {
        values: resampledReadings.map(x => x[1])
      }
    ]
  }

  const colors = ['#fbdd74']
  const axisOpts = {
    xAxisMode: 'tick',
    xIsSeries: true
  }
</script>

<Chart data={data} type='bar' colors={colors} axisOptions={axisOpts}/>
