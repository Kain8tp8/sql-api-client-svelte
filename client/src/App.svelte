<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Brands from "./pages/brands.svelte";
  import Categories from "./pages/category.svelte";
</script>

<Router>
  <main>
    <div class="navbar bg-base-100 container-sm">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </div>
    </div>

    <Route path="/brands" component={Brands} />
    <Route path="/categories" component={Categories} />
  </main>
</Router>
