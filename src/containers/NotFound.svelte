<script>
  import AlertBox from '../components/AlertBox.svelte'
  import { HomeIcon } from 'svelte-feather-icons'
</script>

<style>
  a {
    color: var(--highlight-color);
    display: block;
    height: 2em;
    margin: 2rem auto;
    width: 2em;
  }
  a:hover {
    color: var(--link-color);
  }
</style>

<AlertBox body='Page not found.'/>

<a href='#/'>
  <HomeIcon/>
</a>
