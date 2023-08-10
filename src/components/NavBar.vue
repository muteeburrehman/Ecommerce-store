<template>
  <div id="nav-bar">
    <router-link to="/products" id="products-link">
      <h1>FABULOUS FOOTWEAR</h1>
    </router-link>
    <router-link to="/cart" id="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: #fff;
}

#products-link {
  text-align: center;
  color: black;
  font-size: 18px;
  text-decoration: none;
}

#products-link h1 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

#cart-link {
  display: flex;
  align-items: center;
  text-decoration: none; /* Remove text decoration */
}

#cart-link button {
  background-color: #3498db;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  outline: none; /* Remove button outline */
}

#cart-link button:hover {
  background-color: #2980b9;
}
</style>