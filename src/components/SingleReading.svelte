<script>
  import moment from 'moment'

  export let reading
</script>

<style>
  div {
    text-align: right;
    line-height: 1.2;
  }
  time {
    color: var(--paragraph-color);
    display: block;
  }
  .value {
    display: block;
    font-size: larger;
    font-weight: bold;
    text-align: right;
  }
</style>

{#if reading}
  <div>
    <span class='value'>{reading.value}</span>
    <time datetime={reading.readAt.toISOString()}>{moment(reading.readAt).fromNow()}</time>
  </div>
{/if}
