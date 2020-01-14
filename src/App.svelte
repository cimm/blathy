<script>
  import Home from './pages/Home.svelte'
  import NewUtility from './pages/NewUtility.svelte'
  import NotFound from './pages/NotFound.svelte'
  import Reading from './pages/Reading.svelte'
  import Router from 'svelte-spa-router'

  const routes = {
    '/': Home,
    '/utilities': NewUtility,
    '/readings/:utilityId': Reading,
    '*': NotFound
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
  }
</script>

<Router {routes}/>
