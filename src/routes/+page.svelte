<script>
  let name = 'World';
  import Global from "$lib/global.svelte";
</script>

  <main>
    <h1>Hello {name.toUpperCase()}!</h1>
    <p>This is a Svelte app. Edit the code in <code>src/Home.svelte</code> and save to reload.</p>
  
    <label for="nameInput">Enter your name:</label>
    <input type="text" id="nameInput" bind:value={name} />
    <Global />
  </main>
  