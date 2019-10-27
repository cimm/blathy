<script>
  import Router from 'svelte-spa-router'
  import Home from './pages/Home.svelte'
  import Utilities from './pages/Utilities.svelte'
  import Readings from './pages/Readings.svelte'

  const routes = {
    '/': Home,
    '/utilities': Utilities,
    '/readings/:utilityId': Readings
  }
</script>

<Router {routes}/>
