<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import axios from 'axios';
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  name: 'ProductsPage',
  components: {
    ProductsGrid,
  },
  data() {
    return {
      products:[],
    };
  },
  async created() {
    try {
      const result = await axios.get('http://localhost:8000/api/products');
      console.log('API response:', result.data); // Log the response data
      this.products = result.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
};
</script>
