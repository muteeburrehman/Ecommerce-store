<template>
  <div id="page-wrap">
    <h1 class="cart-heading">Your Shopping Cart</h1>
    <ProductsList :products="cartItems" />
    <button id="checkout-button" v-if="cartItems.length > 0">Proceed to Checkout</button>
    <router-link to="/products" class="continue-shopping-link" v-if="cartItems.length > 0">
      Continue Shopping
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import ProductsList from '../components/ProductsList.vue';

export default {
  name: 'CartPage',
  components: {
    ProductsList,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:8000/api/users/1/cart');

      if (response.status === 200) {
        this.cartItems = response.data;
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  },
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

.continue-shopping-link {
  display: inline-block;
  margin-top: 16px;
  color: #3498db;
  text-decoration: none;
  font-size: 1.2rem;
  border: 2px solid #3498db;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.continue-shopping-link:hover {
  background-color: #3498db;
  color: white;
  transform: scale(1.05);
}

.continue-shopping-link:active {
  transform: scale(0.98);
}
</style>
