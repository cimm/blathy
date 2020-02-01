<script>
  import Home from './containers/Home.svelte'
  import NewUtility from './containers/NewUtility.svelte'
  import NotFound from './containers/NotFound.svelte'
  import Reading from './containers/Reading.svelte'
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
