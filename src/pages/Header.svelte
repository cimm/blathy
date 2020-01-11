<script>
  import Export from '../components/Export.svelte'
  import { UploadIcon, PlusSquareIcon } from 'svelte-feather-icons'
</script>

<style>
  header {
    align-items: center;
    column-gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 3rem 3rem 3rem;
    justify-items: right;
  }
  h1 {
    justify-self: left;
  }
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

<header>
  <h1>Bláthy</h1>

  <a href='#/utilities' title='Add new utility'>
    <PlusSquareIcon/>
  </a>

  <a href='#/import' title='Import from file'>
    <UploadIcon/>
  </a>

  <Export/>
</header>
