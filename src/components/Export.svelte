<script>
  import { utilities, readings } from '../store.js'

  const contents = JSON.stringify({
    utilities: $utilities,
    readings: $readings
  })

  const blob = new Blob([contents], {type: 'text/json'})
  const downloadUrl = URL.createObjectURL(blob)
</script>

<a href={downloadUrl} download='blathy-backup.json'>export</a>
