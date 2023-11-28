<script lang="ts">
  import "$lib/global.svelte";
  import Sidenav from "$lib/components/sidenav/Sidenav.svelte";
</script>

<div>
  <Sidenav></Sidenav>
  <slot />
</div>

<style>
  div {
    display: flex;
  }
</style>
