<script>
  import echarts from 'echarts'
  import Averager from '../averager.js'

  export let readings

  const twelveMonthsAgo = () => {
    let d = new Date()
    d.setYear(d.getFullYear()-1)
    return d
  }

  $: recentData = readings.map((r, i) => {
    if (r.readAt < twelveMonthsAgo()) {
      return
    }
    let diffValue = r.value
    if(readings[i-1] != undefined) {
      diffValue = r.value - readings[i-1].value
    }
    return [r.readAt.toISOString(), diffValue]
  })

  $: averageData = readings.map(r => {
    if (r.readAt < twelveMonthsAgo()) {
      return
    }
    const monthIndex = r.readAt.getMonth()
    const avgMonth = new Averager(readings).avgForMonth(monthIndex)
    return [r.readAt.toISOString(), avgMonth]
  })

  $: opts = {
    xAxis: [
      { type: 'time' }
    ],
    yAxis: [
      { type: 'value' }
    ],
    series: [
      { type: 'line', data: recentData },
      { type: 'line', lineStyle: { type: 'dotted', color: 'silver' }, data: averageData }
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
