<template>
  <div id="nav-bar">
    <router-link to="/products" id="products-link">
      <div id="logo">
        <img src="@/assets/logo.jpg" alt="Shoe Store Logo" />
        <h1 class="site-title">SHOE HUNT</h1>
      </div>
    </router-link>
    <div id="nav-links">
      <router-link to="/login" class="nav-link">Login</router-link>
      <router-link to="/products" class="nav-link">Home</router-link>
      <router-link to="/register" class="nav-link">Signup</router-link>
    </div>
    <router-link to="/cart" id="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
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

#logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

#logo img {
  width: 70px;
  height: auto;
  margin-right: 10px;
}

.site-title {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
}

#nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #3498db;
}

#cart-link {
  display: flex;
  align-items: center;
  text-decoration: none;
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
  outline: none;
}

#cart-link button:hover {
  background-color: #2980b9;
}
</style>
