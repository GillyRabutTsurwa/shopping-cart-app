<script>
  import { onMount } from "svelte";
  import { productsInCart } from "../../../store/products";
  export let cartItemProp; // an object prop accepted from the parent, <Cart/>

  // TESTING:
  function getOccurrence(array, value) {
    return array.filter((currentObj) => currentObj === value).length;
  }

  function incrementItem() {
    productsInCart.update((currentValue) => {
      return [...currentValue, cartItemProp]; // wow it worked.très bien
    });
  }

  function decrementItem() {
    console.log("decrementItem function executed");
    // thanks to this stackoverflow link:
    // https://stackoverflow.com/questions/53534721/find-and-remove-first-matching-element-in-an-array-of-javascript-objects/53534899
    productsInCart.update((currentValue) => {
      const index = currentValue.indexOf(cartItemProp);
      if (index > -1) {
        currentValue.splice(index, 1);
      }
      return currentValue;
    });
  }

  // remove all instances of a singular item, so if there's 10 "queen beds" this function will remove all queen beds
  function removeItem() {
    productsInCart.update((currentValue) => {
      return currentValue.filter((arrayValue) => arrayValue !== cartItemProp);
    });
  }

  onMount(() => {
    cartItemProp.sys.id = Math.random(); // replacing ids from the json file with my own ids. same items not sure if i want it this way or the way i have it in Product.svelte where every single item in the cart has unnique id
    console.log(cartItemProp);
  });
</script>

<div class="cart-item">
  <img src={cartItemProp.fields.image.src} alt="product 1" />
  <div>
    <h4>{cartItemProp.fields.title}</h4>
    <h5>{cartItemProp.fields.price}</h5>
    <span on:click={removeItem} class="remove-item">Remove</span>
  </div>
  <div>
    <i on:click={incrementItem} class="fas fa-chevron-up" />
    <p class="item-amount">{getOccurrence($productsInCart, cartItemProp)}</p>
    <!-- <p class="item-amount">{occurences[cartItemProp]} FAIL</p> -->
    <i on:click={decrementItem} class="fas fa-chevron-down" />
  </div>
</div>

<style>
  .cart-item {
    display: grid;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
  }

  .cart-item img {
    width: 7.5rem;
    height: 7.5rem;
  }

  .cart-item h4 {
    font-size: 0.85rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  .cart-item h5 {
    margin: 0.5rem 0;
    letter-spacing: var(--mainSpacing);
  }

  .item-amount {
    text-align: center;
  }

  .remove-item {
    color: grey;
    cursor: pointer;
  }

  .fa-chevron-up,
  .fa-chevron-down {
    color: var(--primaryColor);
    cursor: pointer;
  }
</style>
