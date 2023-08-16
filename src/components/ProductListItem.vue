<template>
  <div class="product-list-item">
    <img class="product-image" :src="'http://localhost:8000' + product.imageUrl" alt="Product Image"/>
    <div class="product-details">
      <h4 class="product-name">{{ product.name }}</h4>
      <p class="product-price">${{ product.price }}</p>
    </div>
    <div class="product-quantity">
      <input type="number" v-model="quantity" min="1" @input="updateQuantity"/>
    </div>
    <div class="product-total-price">${{ product.total_price }}</div>
    <button class="remove-button" @click="removeFromCart">Remove</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['product'],
  data() {
    return {
      quantity: this.product.quantity,
    };
  },
  methods: {
    async updateQuantity() {
      try {
        const response = await axios.post(`http://localhost:8000/api/users/1/cart`, {
          product_id: this.product.product_id, // Assuming this is the correct property name
          quantity: parseInt(this.quantity),
        });

        if (response.status === 200) {
          const updatedProduct = {
            ...this.product,
            quantity: parseInt(this.quantity),
            total_price: this.product.price * parseInt(this.quantity),
          };

          this.$emit('updateQuantity', updatedProduct);
        }
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    },
    async removeFromCart() {
      try {
        const response = await axios.delete(`http://localhost:8000/api/users/1/cart/${this.product.id}`);

        if (response.status === 200) {
          this.$emit('remove', this.product.product_id);
        }
      } catch (error) {
        console.error('Error removing product:', error);
      }
    },
  },
};
</script>

<style scoped>
.product-list-item {
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

.product-details {
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

.product-total-price {
  font-size: 1.2rem;
  color: #555;
  align-self: center;
  padding: 0 16px 0 0;
}

.product-quantity {
  flex: 1;
  align-self: center;
  padding: 0 16px;
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
