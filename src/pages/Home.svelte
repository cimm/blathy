<script>
  import { utilities } from '../store.js'

  let utilityList
  utilities.subscribe(i => {
		utilityList = i
	})
</script>

<h1>Bláthy</h1>

<a href='#/add-utility'>add utility</a>

<ul>
	{#each utilityList as utility}
		<li>
			{utility.name}
      <a href='#/add-reading/{utility.id}'>add</a>
		</li>
	{/each}
</ul>
