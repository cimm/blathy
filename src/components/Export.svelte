<script>
  import { utilities, readings } from '../store.js'
  import { DownloadIcon } from 'svelte-feather-icons'

  const contents = JSON.stringify({
    utilities: $utilities,
    readings: $readings
  })

  const blob = new Blob([contents], {type: 'text/json'})
  const downloadUrl = URL.createObjectURL(blob)
</script>

<style>
  a {
    color: var(--highlight-color);
    display: block;
    height: 2rem;
    width: 2rem;
  }
  a:hover {
    filter: brightness(5);
  }
</style>

<a href={downloadUrl} download='blathy-backup.json' title='Save to file'>
  <DownloadIcon/>
</a>
