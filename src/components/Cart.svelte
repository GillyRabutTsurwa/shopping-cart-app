<script>
  // TESTING
	import { afterUpdate } from 'svelte';
  import { get } from "svelte/store";
  import { cartStatus, toggleCartStatus } from "../../store/cart";
  import { productsInCart } from "../../store/products";
  import CartItem from "./nested/CartItem.svelte";

  let isCartOpen;
  // TESTINGPASS:
  // on fait ceci car on veut que un article qui est selectioné plusieurs fois s'affiche juste une fois sur la carte
  $: productsInCartUI = [...new Set($productsInCart)];

  $: totalPricesArr = $productsInCart.map((currentProduct) => currentProduct.fields.price);
  $: sum = totalPricesArr.reduce((accumulator, currentValue) => accumulator + currentValue , 0).toFixed(2);


  cartStatus.subscribe((data) => {
    console.log(get(cartStatus));
    // console.log(get(cartStatus) === data); true. interesting
    isCartOpen = data; //NOTE: je peux aussi faire isCartOpen = get(cartStatus);
  });

  const clearCart = () => {
    if ($productsInCart !== 0) productsInCart.set([]);
    console.log("Touts les articles dans la carte supprimés")
  };

  afterUpdate(() => {
    console.log(productsInCart);
    console.log($productsInCart);
  })
</script>

<div class="cart-overlay">
  <div class="cart" class:showCart={isCartOpen} class:transparentBcg={isCartOpen}>
    <span class="close-cart" on:click={toggleCartStatus}>
      <i class="fas fa-window-close" />
    </span>
    <h2>Your cart</h2>
    <div class="cart-content">
      {#each productsInCartUI as currentProduct}
        <CartItem cartItemProp={currentProduct} />
      {:else}
        <h5 style="text-align:center;">Your Cart is Empty</h5>
      {/each}
    </div>
    <div class="cart-footer">
      <h3>Your total : $ <span class="cart-total">{sum}</span></h3>
      <button on:click={clearCart} class="clear-cart banner-btn">Clear cart</button>
    </div>
  </div>
</div>

<style>
  .cart-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: var(--mainTransition);
    transition: var(--mainTransition);
    /* background: transparent; */
    background-color: rgba(240, 157, 81, 0.5);
    z-index: 20;
    visibility: hidden;
  }

  .cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: rgb(231, 226, 221);
    /* cart needs higher z-index que son parent, cart-overlay */
    z-index: 30;
    padding: 1.5rem;
    -webkit-transition: var(--mainTransition);
    transition: var(--mainTransition);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .showCart {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  .transparentBcg {
    visibility: visible;
  }

  @media screen and (min-width: 768px) {
    .cart {
      width: 30vw;
      min-width: 450px;
    }
  }

  .close-cart {
    font-size: 1.7rem;
    cursor: pointer;
  }

  .cart h2 {
    text-transform: capitalize;
    text-align: center;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 2rem;
  }

  .cart-footer {
    margin-top: 2rem;
    letter-spacing: var(--mainSpacing);
    text-align: center;
  }

  .cart-footer h3 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
</style>
