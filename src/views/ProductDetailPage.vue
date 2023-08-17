<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="'http://localhost:8000' + product.imageUrl" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <p>Average rating: {{ product.averageRating }}</p>
      <button
          id="add-to-cart"
          :class="[{'added': addToCartButtonText === 'Added to Cart'}, {'success': addToCartButtonText === 'Added to Cart'}]"
          v-on:click="addToCart"
          :disabled="addingToCart"
      >{{ addToCartButtonText }}</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else />
</template>

<script>
import axios from "axios";
import NotFoundPage from "@/views/NotFoundPage.vue";

export default {
  name: 'ProductDetailPage',
  components: { NotFoundPage },
  data() {
    return {
      product: {},
      addToCartButtonText: 'Add to Cart',
      addingToCart: false,
    };
  },
  methods: {
    async addToCart() {
      this.addingToCart = true;
      try {
        await axios.post('http://localhost:8000/api/users/1/cart', {
          product_id: this.$route.params.id,
          quantity: 1
        });
        this.addToCartButtonText = 'Added to Cart';
      } catch (error) {
        console.error("Error adding to cart:", error);
      } finally {
        this.addingToCart = false;
      }
    }
  },
  async created() {
    const result = await axios.get(`http://localhost:8000/api/products/${this.$route.params.id}`);
    const product = result.data;
    this.product = product;
  }
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
  margin-bottom: 16px;
}

img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

#product-details {
  padding: 16px;
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

#add-to-cart {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#add-to-cart:hover {
  background-color: #2980b9;
}

#add-to-cart[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}

#add-to-cart.added {
  background-color: #27ae60;
}

#add-to-cart.added:hover {
  background-color: #219653;
}

#add-to-cart.success {
  background-color: #2ecc71;
}

#add-to-cart.success:hover {
  background-color: #27ae60;
}

#price {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 1.2rem;
}

h1, h3, h4 {
  margin: 8px 0;
  font-weight: bold;
}

h1 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.4rem;
  color: #3498db;
}

h4 {
  font-size: 1.2rem;
  color: #555;
  margin-top: 16px;
}

p {
  line-height: 1.6;
  color: #333;
}
</style>
