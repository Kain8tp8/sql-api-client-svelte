<script lang="ts">
  import CategoryItem from "../components/CategoryItem.svelte";
  //
  import {addCategory, categoryStore, fetchCategory,} from "../store/category.store";
  fetchCategory();

  let nameInput: HTMLInputElement;
  let modalCheck: HTMLInputElement;

  function create() {
    modalCheck.checked = false;

    let name = nameInput.value;
    addCategory(name);
  }
</script>

<main class="container mx-auto p-6">
  <div class="flex justify-between">
    <h1 class="text-5xl font-bold">Category</h1>
    <label for="my-modal" class="btn modal-button">Add Category</label>
  </div>

  <div class="grid grid-cols-4 gap-3 mt-10">
    <!--  -->
    {#each $categoryStore as category}
      <CategoryItem id={category.id} name={category.name} />
    {/each}
    <!--  -->
  </div>

  <input
    bind:this={modalCheck}
    type="checkbox"
    id="my-modal"
    class="modal-toggle"
  />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-2xl">Create category</h3>
      <div class="flex flex-col gap-2 mt-4">
        <input
          bind:this={nameInput}
          type="text"
          placeholder="Name"
          class="input input-bordered w-full"
        />
      </div>
      <div class="modal-action">
        <button on:click={create} class="btn btn-primary">Create</button>
        <label for="my-modal" class="btn">Create</label>
      </div>
    </div>
  </div>
</main>
