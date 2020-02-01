<script>
  import { CheckCircleIcon, DownloadIcon, PlusSquareIcon, UploadIcon } from 'svelte-feather-icons'
</script>

<style>
  section {
    background-color: var(--card-background-color);
    border-radius: 3px;
    color: var(--card-paragraph-color);
    padding: .5rem;
  }
  h1 {
    margin: 1em auto;
    width: 2em;
  }
</style>

<section>
  <h1><CheckCircleIcon/></h1>
  <p>Bláthy is a tool to keep track of your energy usage.</p>
  <ol>
    <li>Create one or more utilities (eg. water, electricity or gas) to track via the <PlusSquareIcon size="1x"/> icon or import a previous backup via the <UploadIcon size="1x"/> icon.</li>
    <li>Record the value of your utility meter as often as you like (eg. once per month).</li>
    <li>Get an idea of your energy usage by inspecting the graphs.</li>
  </ol>
  <p>Bláthy is a progressive web app (= a website behaving as a mobile app). It works without internet connection and does not store any information outside this device. Take regular backups via the <DownloadIcon size="1x"/> icon!</p>
</section>
