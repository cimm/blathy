<script>
  import Router from 'svelte-spa-router'
  import Home from './pages/Home.svelte'
  import AddUtility from './pages/AddUtility.svelte'
  import AddReading from './pages/AddReading.svelte'

  const routes = {
    '/': Home,
    '/add-utility': AddUtility,
    '/add-reading/:utilityId': AddReading
  }
</script>

<Router {routes}/>
