<script>
    import { Tabs, Tab, TabContent } from "carbon-components-svelte";
    import Global from "$lib/global.svelte";
  </script>


<main>
    <Global />
<h1>Raiding</h1>
  
<Tabs>
    <Tab label="Tab label 1" />
    <Tab label="Tab label 2" />
    <Tab label="Tab label 3" />
    <svelte:fragment slot="content">
      <TabContent>Content 1</TabContent>
      <TabContent>Content 2</TabContent>
      <TabContent>Content 3</TabContent>
    </svelte:fragment>
</Tabs>

</main>
