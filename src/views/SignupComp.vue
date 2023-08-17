<template>
  <div class="container">
    <div class="form signup">
      <header>Signup</header>
      <form @submit.prevent="register">
        <div class="field input-field">
          <input type="email" placeholder="Email" class="input" v-model="email">
        </div>
        <div class="field input-field">
          <input type="password" placeholder="Create password" class="password" v-model="password">
        </div>
        <div class="field input-field">
          <input type="password" placeholder="Confirm password" class="password" v-model="confirmPassword">
          <i class='bx bx-hide eye-icon' @click="togglePasswordVisibility"></i>
        </div>
        <div class="field button-field">
          <button>Signup</button>
        </div>
      </form>
      <div class="form-link">
        <span>Already have an account? <a href="#" class="link login-link">Login</a></span>
      </div>
      <div class="line"></div>
      <div class="media-options">
        <a href="#" class="field facebook">
          <i class='bx bxl-facebook facebook-icon'></i>
          <span>Login with Facebook</span>
        </a>
      </div>
      <div class="media-options">
        <a href="#" class="field google">
          <img src="@/assets/google-icon.png" alt="" class="google-img">
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
  name: "SignupComp",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
    };
  },
  methods: {
    async register() {
      try {
        let data = {
          email: this.email,
          password: this.password,
        };
        await axios.post("/api/register", data); // Replace with your registration endpoint
        console.log("Registered");
        router.push("/login"); // Redirect to the login page after successful registration
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>


<style scoped>
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
  position: relative;
  max-width: 430px;
  width: 100%;
  padding: 30px;
  border-radius: 6px;
  background: #fff;
}

.form header {
  font-size: 28px;
  font-weight: 600;
  color: #232836;
  text-align: center;
  margin-bottom: 20px;
}

.form .field {
  position: relative;
  margin-bottom: 20px;
}

.form .input {
  width: 100%;
  padding: 10px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  font-size: 16px;
}

.form .password {
  width: 100%;
  padding: 10px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  font-size: 16px;
  position: relative;
}

.form .password .eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 20px;
}

.form .button-field {
  text-align: center;
}

.form button {
  padding: 10px 20px;
  background-color: #0171d3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.form button:hover {
  background-color: #016dcb;
}

.form-link {
  text-align: center;
  margin-top: 20px;
}

.form-link .link {
  color: #0171d3;
  text-decoration: none;
}

.line {
  position: relative;
  height: 1px;
  width: 100%;
  margin: 20px 0;
  background-color: #d4d4d4;
}

.media-options {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.media-options .field {
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #232836;
  text-decoration: none;
}

.media-options .facebook-icon {
  font-size: 24px;
  margin-right: 10px;
}

.media-options .google-img {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

@media screen and (max-width: 400px) {
  .form {
    padding: 20px 10px;
  }
}
</style>