<script>
  import { toggleCartStatus } from "../../store/cart"; // NOTE: change name later
  import { productsInCart } from "../../store/products";

  // let isCartOpen;

  // cartStatus.subscribe((data) => {
  //   isCartOpen = data;
  //   console.log(get(cartStatus));
  // });

  $: itemsInCart = $productsInCart.length;
</script>

<nav class="navbar">
  <div class="navbar-center">
    <span class="nav-icon">
      <i class="fas fa-bars" />
    </span>
    <img src="img/logo.svg" alt="Store Logo" />
    <button on:click={toggleCartStatus} class="cart-btn">
      <span class="nav-icon"><i class="fas fa-cart-plus" /></span>
      <div class="cart-items">{itemsInCart}</div>
    </button>
  </div>
</nav>

<style>
  .navbar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: rgb(231, 226, 221);
    /* navbar va rester au-dessûs */
    z-index: 1;
  }

  .navbar-center {
    width: 100%;
    max-width: 117rem;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 1.5rem;
  }

  .nav-icon {
    font-size: 1.5rem;
  }

  .cart-btn {
    all: unset; /* NOTE: to get rid of all custom button properties */
    display: block;
    position: relative;
    cursor: pointer;
  }

  .cart-items {
    /* cette element est positione relativement a lequel ? */
    position: absolute;
    top: -1.1rem;
    right: -1.3rem;
    background-color: var(--primaryColor);
    padding: 0 0.5rem;
    border-radius: 30%;
    color: var(--mainWhite);
    font-size: 1.25rem;
  }
</style>
