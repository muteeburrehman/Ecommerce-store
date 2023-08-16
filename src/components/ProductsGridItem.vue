<template>
  <div
      class="product-item"
  >
    <img v-bind:src="'http://localhost:8000' + product.imageUrl"/>
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">${{ product.price }}</p>
    <div class="button-container">
      <router-link v-bind:to="'/products/' + product.id">
        <button class="view-details-button">View Details</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductsGridItem',
  props: ['product']
}
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* To distribute content evenly within the item */
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 100px;
  width: 120px;
}

a {
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.view-details-button {
  background-color: #3498db;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-details-button:hover {
  background-color: #2980b9;
}

</style>