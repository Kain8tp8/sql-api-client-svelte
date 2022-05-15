<script lang="ts">
  import type { Brand } from "../store/brand.store";
  import type { Categories } from "../store/category.store";

  import { removeProducts } from "../store/products.store";

  export let id: number;
  export let name: string;
  export let image: string;
  export let description: string;
  export let brand: Brand;
  export let category: Categories;
  export let price: number;

  function remove() {
    removeProducts(id);
  }
</script>

<div class="card w-full bg-base-200 shadow-md rounded-md">
  <img src={image} class="card-img-top" alt="" />
  <div class="card-body">
    <span class="badge badge-primary">{brand.name}</span>
    <span class="badge badge-primary">{category.name}</span>
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
    <h3>{price}</h3>
    <div class="card-actions justify-end">
      <button on:click={remove} class="btn btn-primary btn-sm">Delete</button>
    </div>
  </div>
</div>
