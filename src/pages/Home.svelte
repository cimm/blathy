<script>
  import Header from '../pages/Header.svelte'
  import SingleReading from '../components/SingleReading.svelte'
  import { utilities, readings } from '../store.js'

  function lastReading(utility) {
    let utilityReadings = $readings.filter(r => r.utilityId == utility.id)
    return utilityReadings[utilityReadings.length-1]
  }
</script>

<style>
  ul {
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a {
    background-color: var(--card-background-color);
    border-radius: 3px;
    color: var(--link-color);
    display: block;
    min-height: 5.5rem;
    padding: 1rem;
    text-decoration: none;
  }
  a:hover {
    filter: brightness(1.2);
  }
  h2 {
    color: var(--headline-color);
    margin: 0;
  }
</style>

<Header/>

<ul>
	{#each $utilities as utility}
		<li>
      <a href='#/readings/{utility.id}'>
        <h2>{utility.name}</h2>
        {#if lastReading(utility)}
          <SingleReading reading={lastReading(utility)}/>
        {/if}
      </a>
		</li>
	{/each}
</ul>
