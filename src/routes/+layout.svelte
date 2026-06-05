<script lang="ts">
  import Preloader from '../component/Preloader.svelte';

  import "../style.css";

	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href="/index/brand/fff40.svg" />
</svelte:head>

<Preloader />
{@render children()}