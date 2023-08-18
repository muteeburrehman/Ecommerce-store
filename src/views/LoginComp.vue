<template>
  <div class="container">
    <div class="form">
      <header>Login</header>
      <form @submit.prevent="login">
        <div class="field">
          <input type="text" name="email" v-model="email" placeholder="Email" />
        </div>
        <div class="field">
          <input type="password" name="password" v-model="password" placeholder="Password" />
          <i class="eye-icon fas fa-eye-slash" @click="togglePasswordVisibility"></i>
        </div>
        <div class="field button-container">
          <button class="login-button">Login</button>
        </div>
      </form>

      <div class="form-link">
        <span>Don't have an account? </span>
        <!-- Use router-link instead of <a> -->
        <router-link to="/register" class="nav-link">Signup</router-link>
      </div>
      <div class="line"></div>
      <div class="media-options">
        <a href="#" class="facebook">
          <div class="facebook-icon">
            <img src="@/assets/fb.png" alt="Facebook Icon" />
          </div>
          <span>Login with Facebook</span>
        </a>
        <a href="#" class="google">
          <div class="google-icon">
            <img src="@/assets/google-icon.png" alt="Google Icon" />
          </div>
          <span>Login with Google</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router"; // Import the router object

export default {
  name: "LoginComp",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    async login() {
      try {
        let data = {
          email: this.email,
          password: this.password,
        };
        await axios.post("/api/login", data); // Replace with your login endpoint
        console.log("Logged in");
        router.push("/products"); // Redirect to the dashboard after successful login
      } catch (error) {
        console.error("Login failed", error);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
/* Global styles and imports */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/* Component styles */
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4070f4;
  column-gap: 30px;
}

.form {
  position: absolute;
  max-width: 430px;
  width: 100%;
  padding: 30px;
  border-radius: 6px;
  background: #FFF;
}

header {
  font-size: 28px;
  font-weight: 600;
  color: #232836;
  text-align: center;
}

form {
  margin-top: 30px;
}

.field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
}

.field input,
.field button {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
}

.field input {
  outline: none;
  padding: 0 15px;
  border: 1px solid #cacaca;
}

.field input:focus {
  border-bottom-width: 2px;
}

.eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #8b8b8b;
  cursor: pointer;
  padding: 5px;
}

/* Adjusted styles for button placement */
.field.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.login-button {
  color: #fff;
  background-color: #0171d3;
  transition: background-color 0.3s ease;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
}

.login-button:hover {
  background-color: #016dcb;
}

/* Styles for social media options */
.media-options {
  margin-top: 20px;
}

.media-options a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  margin-top: 10px;
  padding: 10px 20px;
  border: 1px solid #cacaca;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.media-options a:hover {
  background-color: #f0f0f0;
  color: #232836;
}

.facebook {
  background-color: #4267b2;
}

.facebook-icon {
  height: 28px;
  width: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-right: 10px;
}

.facebook-icon img {
  width: 100%;
  height: 100%;
}

.google {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  text-decoration: none;
  background: #DD4B39;
  border-radius: 6px;
  margin-top: 10px;
  padding: 10px 20px;
  border: 1px solid #cacaca;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

.google-icon {
  height: 28px;
  width: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-right: 10px;
}

.google-icon img {
  width: 100%;
  height: 100%;
}

.google:hover {
  background: #E74B37;
}

/* Rest of your styles... */

/* Media queries and other adjustments */
@media screen and (max-width: 400px) {
  .form {
    padding: 20px 10px;
  }
}
</style>
