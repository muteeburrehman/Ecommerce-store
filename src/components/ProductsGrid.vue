<template>
  <div class="grid-wrap">
    <ProductGridItem
      v-for="product in products"
      :key="product.id"
      :product="product"/>
  </div>
</template>
<script>
import ProductGridItem from "@/components/ProductsGridItem.vue";
//import {products} from "@/fake-data";
export default {
  name:'ProductsGrid',
  props:['products'],
  components:{
    ProductGridItem
  },
}
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}


</style>
