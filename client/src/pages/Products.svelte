<script lang="ts">
import { Brand, brandStore } from "../store/brand.store";
import { Categories, categoryStore } from "../store/category.store";
  import { addProducts, fetchProducts } from "../store/products.store";
  fetchProducts();


  let modalCheck: HTMLInputElement;

  let nameInput: HTMLInputElement;
  let imageInput: HTMLInputElement;
  let descriptionInput: HTMLTextAreaElement;
  let priceInput: HTMLInputElement;

  function create() {
    modalCheck.checked = false;

    let brand: Brand;
    let category: Categories;
    let name = nameInput.value;
    let image = imageInput.files;
    let description = descriptionInput.value;
    let price = priceInput.valueAsNumber;

    addProducts(name, image, description, brand, category, price);
  }
</script>

<main class="container mx-auto p-6">
  <div class="flex justify-between">
    <h1 class="text-5xl font-bold">Products</h1>
    <label for="my-modal" class="btn modal-button">Add Category</label>
  </div>

  <div class="grid grid-cols-4 gap-3 mt-10">
    <!--  -->
    <!-- {#each $productsStore as products}
        <ProductsItem
            id={products.id} 
            name={products.name} 
      {/each} -->
    <!--  -->
  </div>

  <input
    bind:this={modalCheck}
    type="checkbox"
    id="my-modal"
    class="modal-toggle"
  />

  <div class="modal">
    <form
      action="http://localhost:8009/products"
      enctype="multipart/form-data"
      method="post"
    >
      <div class="modal-box">
        <h3 class="font-bold text-2xl">Create Products</h3>

        <div class="flex flex-col gap-2 mt-4">
          <input
            bind:this={nameInput}
            type="text"
            name="name"
            placeholder="Name"
            class="input input-bordered w-full"
          />
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <textarea
            bind:this={descriptionInput}
            type="text"
            name="description"
            placeholder="Description"
            class="input input-bordered w-full"
          />
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <input
            bind:this={priceInput}
            type="number"
            name="price"
            placeholder="Price"
            class="input input-bordered w-full"
          />
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <input
            bind:this={imageInput}
            type="file"
            name="poster"
            placeholder="Poster"
            class="input input-bordered w-full"
          />
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <select
            name="brand_id"
            class="select select-bordered w-full"
            placeholder="Select Brand"
          >
            <option disabled selected>NO Brand</option>

            {#each $brandStore as brand}
              <option value={brand.id}>{brand.name}</option>
              <option value="1">flip</option>
            {/each}
          </select>
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <select
            name="category_id"
            class="select select-bordered w-full"
            placeholder="Select Brand"
          >
            <option disabled selected>NO Category</option>

            {#each $categoryStore as categorey}
              <option value={categorey.id}>{categorey.name}</option>
            {/each}

            <option value="1">lll</option>
          </select>
        </div>

        <div class="modal-action">
          <button on:click={create} class="btn btn-primary">Create</button>
          <label for="my-modal" class="btn">Create</label>
        </div>
      </div>
    </form>
  </div>
</main>
