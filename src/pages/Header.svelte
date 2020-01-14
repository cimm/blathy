<script>
  import Export from '../components/Export.svelte'
  import Import from '../components/Import.svelte'
  import { PlusSquareIcon } from 'svelte-feather-icons'
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
    color: var(--link-color);
  }
</style>

<header>
  <h1>Bláthy</h1>
  <a href='#/utilities' title='Add new utility'>
    <PlusSquareIcon/>
  </a>
  <Import/>
  <Export/>
</header>
