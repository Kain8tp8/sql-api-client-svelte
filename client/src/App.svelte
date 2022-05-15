<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Brands from "./pages/brands.svelte";
  import Categories from "./pages/category.svelte";
  import Products from "./pages/Products.svelte";
</script>

<Router>
  <main>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>

        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                /></svg
              >
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <!-- svelte-ignore a11y-missing-attribute -->
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a>Settings</a></li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

    <Route path="/brands" component={Brands} />
    <Route path="/categories" component={Categories} />
    <Route path="/products" component={Products} />
  </main>
</Router>
