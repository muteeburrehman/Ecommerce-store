<template>
  <div v-if="localProducts.length > 0">
    <ProductsListItem
        v-for="product in localProducts"
        :key="product.id"
        :product="product"
        @updateQuantity="handleUpdateQuantity"
        @remove="handleRemove"
    />
    <h3 id="total-price">Total: ${{ calculateTotalPrice() }}</h3>
  </div>
  <p v-else>You haven't added anything to your cart yet!</p>
</template>

<script>
import ProductsListItem from "@/components/ProductListItem.vue";

export default {
  name: 'ProductsList',
  props: ['products'],
  components: { ProductsListItem },
  data() {
    return {
      localProducts: [], // Create an empty local array
    };
  },
  methods: {
    handleUpdateQuantity(updatedProduct) {
      const index = this.localProducts.findIndex(item => item.id === updatedProduct.id);
      if (index !== -1) {
        this.$set(this.localProducts, index, updatedProduct);
      }
    },
    handleRemove(productId) {
      this.localProducts = this.localProducts.filter(product => product.product_id !== productId);
    },
    calculateTotalPrice() {
      return this.localProducts.reduce((sum, product) => sum + product.total_price, 0);
    },
  },
  watch: {
    products: {
      handler(newProducts) {
        this.localProducts = [...newProducts];
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
#total-price {
  padding: 16px;
  text-align: right;
  font-size: 1.2rem;
}
</style>
