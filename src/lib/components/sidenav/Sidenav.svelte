<script>
  import "$lib/global.svelte";
  import LogoFull from "../../../../static/images/LogoFull.svg?component";
</script>

<aside>
  <LogoFull />
  <nav>
    <ul>
      <li><a class="block" href="/">test</a></li>
    </ul>
  </nav>
</aside>

<style>
  nav ul {
    list-style: none;
    padding: 3px 5px;
    background: #111;
    &.alt {
      background: blue;
    }
  }
  li {
    display: inline;
  }
  aside {
    max-width: 10em;
    height: auto;
    background: yellowgreen;
    left: 0;
    display: flex;
    flex: content;
  }
</style>
