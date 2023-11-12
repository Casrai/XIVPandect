<script>
    let name = 'World';
  </script>
  
  <style>
    main {
      max-width: 600px;
      margin: 50px auto;
      text-align: center;
    }
  
    h1 {
      color: #ff3e00;
    }
  
    input {
      margin-top: 10px;
      padding: 5px;
    }
  </style>
  
  <main>
    <h1>Hello {name}!</h1>
    <p>This is a Svelte app. Edit the code in <code>src/Home.svelte</code> and save to reload.</p>
  
    <label for="nameInput">Enter your name:</label>
    <input type="text" id="nameInput" bind:value={name} />
  </main>
  