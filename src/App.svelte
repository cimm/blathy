<script>
  import Home from './pages/Home.svelte'
  import Import from './pages/Import.svelte'
  import NewUtility from './pages/NewUtility.svelte'
  import NotFound from './pages/NotFound.svelte'
  import Reading from './pages/Reading.svelte'
  import Router from 'svelte-spa-router'

  const routes = {
    '/': Home,
    '/import': Import,
    '/utilities': NewUtility,
    '/readings/:utilityId': Reading,
    '*': NotFound
  }
</script>

<Router {routes}/>
