<script>
  import { products } from "../../store/products";
  import Product from "./nested/Product.svelte";
</script>

<section class="products">
  <h2 class="section-title">Our Products</h2>
  <div class="products-centre">
    <!-- {#each storeProducts as currentProduct}
      <Product productObj={currentProduct} />
    {/each} -->
    {#each $products as currentProduct}
      <Product productObj={currentProduct} />
    {/each}
  </div>
</section>

<style>
  .products {
    padding: 4rem 0;
  }

  .section-title h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 5rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  .products-centre {
    width: 90vw;
    margin: 0 auto;
    max-width: 117rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));

    grid-row-gap: 2rem;
    grid-column-gap: 1.5rem;
  }
</style>
