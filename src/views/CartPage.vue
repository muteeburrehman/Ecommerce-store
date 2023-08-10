<template>
  <div id="page-wrap">
    <h1 class="cart-heading">Your Shopping Cart</h1>
    <ProductsList :products="products=cartItems"/>
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
import { cartItems } from '../fake-data';
import ProductsList from '../components/ProductsList.vue';

export default {
  name: 'CartPage',
  components: {
    ProductsList,
  },
  data() {
    return {
      cartItems,
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
          (sum, item) => sum + Number(item.price),
          0,
      );
    }
  }
};
</script>

<style scoped>
h1 {
  border-bottom: 2px solid #333;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
  font-size: 1.8rem;
}

.cart-heading {
  color: #333;
}

#total-price {
  padding: 16px;
  text-align: right;
  font-size: 1.2rem;
}

#checkout-button {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.2rem;
  margin-top: 16px;
}

#checkout-button:hover {
  background-color: #2980b9;
}


</style>
