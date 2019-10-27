<script>
  import echarts from 'echarts'

  export let data
  export let labels

  $: opts = {
    xAxis: {
      data: labels
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: data
    }]
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

<div bind:this={rootElement} class='chart'/>
