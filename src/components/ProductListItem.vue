<template>
  <div class="product-container">
    <img class="product-image" v-bind:src="product.imageUrl">
    <div class="details-wrap">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">${{ product.price }}</p>
    </div>
    <button class="remove-button">Remove from Cart</button>
  </div>
</template>
<script>
export default {
  name:'ProductsListItem',
  props:['product'],
}
</script>

<style scoped>
.product-container {
  align-content: center;
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.product-name {
  font-size: 1.4rem;
  margin: 0;
}

.product-price {
  font-size: 1.2rem;
  color: #555;
}

.remove-button {
  flex: 1;
  margin: auto;
  background-color: #e74c3c;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.remove-button:hover {
  background-color: #c0392b;
}
</style>