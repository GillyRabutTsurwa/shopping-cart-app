<script>
  import Navbar from "./components/Navbar.svelte";
  import Header from "./components/Header.svelte";
  import Products from "./components/Products.svelte";
  import Cart from "./components/Cart.svelte";
  import { onMount } from "svelte";

  let products = [];
  let cartOpen = false;

  async function retrouver() {
    try {
      const response = await fetch("http://localhost:3000/items");
      const data = await response.json();

      if (response.ok) {
        products = data;
      } else {
        throw Error(" FAIL ");
      }

      console.log(products);
    } catch (error) {
      console.log(error.message);
    }
  }

  function cartClick() {
    if (!cartOpen) cartOpen = true;
  }

  function closeCart() {
    if (cartOpen) cartOpen = false;
  }

  onMount(retrouver);
</script>

<main>
  <Navbar on:click={cartClick} />
  <Cart cartStatusProp={cartOpen} on:click={closeCart} />
  <Header />
  <Products productsProp={products} />
  <!-- <Cart /> -->
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
