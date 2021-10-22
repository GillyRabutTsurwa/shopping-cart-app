<div class="cart-item">
  <img src="img/product-1.jpeg" alt="product 1" />
  <div>
    <h4>Queen Bed</h4>
    <h5>$9.00</h5>
    <span class="remove-item">Remove</span>
  </div>
  <div>
    <i class="fas fa-chevron-up" />
    <p class="item-amount">1</p>
    <i class="fas fa-chevron-down" />
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
