<script>
  import { AlertTriangleIcon } from 'svelte-feather-icons'

  export let body
</script>

<style>
  section {
    background-color: var(--card-background-color);
    border-radius: 3px;
    color: var(--card-paragraph-color);
    column-gap: 1rem;
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    line-height: 1.3;
    padding: .5rem;
  }
  p {
    margin: 0;
  }
</style>

<section>
  <AlertTriangleIcon/>
  <p>{body}</p>
</section>
