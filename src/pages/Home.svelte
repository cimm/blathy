<script>
  import { utilities } from '../store.js'
</script>

<h1>Bláthy</h1>

<a href='#/utilities'>add utility</a>

<ul>
	{#each $utilities as utility}
		<li>
			{utility.name}
      <a href='#/readings/{utility.id}'>add</a>
		</li>
	{/each}
</ul>
