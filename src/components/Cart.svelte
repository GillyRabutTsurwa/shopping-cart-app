<script>
  export let cartStatusProp;
  import CartItem from "./nested/CartItem.svelte";
</script>

<div class="cart-overlay">
  <div class="cart" class:showCart={cartStatusProp} class:transparentBcg={cartStatusProp}>
    <span class="close-cart" on:click>
      <i class="fas fa-window-close" />
    </span>
    <h2>Your cart</h2>
    <div class="cart-content">
      <CartItem />
    </div>
    <div class="cart-footer">
      <h3>Your total : $ <span class="cart-total">0</span></h3>
      <button class="clear-cart banner-btn">Clear cart</button>
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
