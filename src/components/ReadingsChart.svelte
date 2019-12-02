<script>
  import echarts from 'echarts'
  import Resampler from '../resampler.js'

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

  $: winterAreas = function() {
    const areas = []
    const years = readings.map(r => r.readAt.getFullYear())
    const max = Math.max(...years)
    let cursor = Math.min(...years)
    while(cursor <= max) {
      areas.push([{ xAxis: `${cursor}-12-01` }, { xAxis: `${cursor+1}-02-28` }])
      cursor++
    }
    return areas
  }

  $: opts = {
    xAxis: [
      {
        type: 'time',
        axisLabel: { formatter: (v, i) => new Date(v).toLocaleDateString('en-GB') }
      }
    ],
    yAxis: [
      { type: 'value' }
    ],
    series: [
      { type: 'line',
        step: 'middle',
        data: resampledReadings,
        symbol: 'none',
        markArea: {
          data: winterAreas(),
          itemStyle: { color: "#ddd", opacity: 0.5 }
        }
      }
    ],
    tooltip: {
      trigger: 'axis'
    }
  }

  let rootElement

  $: if (rootElement) {
    const chart = echarts.init(rootElement)
    chart.setOption(opts)
  }
</script>

<style>
  .chart {
    width: 100%;
    height: 300px;
  }
</style>

<div class='chart' bind:this={rootElement} />
