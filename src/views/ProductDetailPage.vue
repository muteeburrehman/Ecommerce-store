<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <p>Average rating: {{ product.averageRating }}</p>
      <button id="add-to-cart">Add to Cart</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else/>
</template>

<script>
import { products } from '../fake-data';
import NotFoundPage from "@/views/NotFoundPage.vue";

export default {
  name: 'ProductDetailPage',
  components: {NotFoundPage},
  data() {
    return {
      product: products.find((p) => p.id === this.$route.params.id),
    };
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
  width: 100%; /* Make sure the image scales properly */
  max-width: 400px; /* Limit the maximum width */
  height: auto; /* Maintain aspect ratio */
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

#description {
  margin-top: 16px;
}
</style>
