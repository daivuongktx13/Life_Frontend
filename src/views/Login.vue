<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div
          class="login100-pic js-tilt"
          data-tilt
        >
          <img
            src="../assets/login/images/img-01.png"
            alt="IMG"
          >
        </div>
        
        <div class="login100-form validate-form">
          <form @submit.prevent="handleSubmit">
          <span class="login100-form-title">Login </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              v-model="username"
              class="input100"
              type="email"
              placeholder="Email"
              required
            >
            <span class="focus-input100" />
            <span class="symbol-input100">
              <i
                class="fa fa-envelope"
                aria-hidden="true"
              />
            </span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              v-model="password"
              class="input100"
              type="password"
              placeholder="Password"
              required
            >
            <span class="focus-input100" />
            <span class="symbol-input100">
              <i
                class="fa fa-lock"
                aria-hidden="true"
              />
            </span>
          </div>

          <div class="container-login100-form-btn">
            <input class="bg-green-600 login100-form-btn hover:bg-green-700" type="submit" value="Login">
          </div>

          </form>

          <div class="text-center p-t-12">
            <span class="txt1"> Forgot </span>
            <a
              class="txt2"
              href="#"
            > Username / Password? </a>
          </div>
          <transition name="slide-fade">
            <div
              v-if="showError"
              class="text-center"
            >
              <div class="txt2 text-red-700">Wrong username or password!</div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div
              v-if="showSuccess"
              class="text-center"
            >
              <div class="txt2 text-xl m-2 text-green-400">Login complete!</div>
            </div>
          </transition>
          <div class="text-center p-t-90">
            <a
              class="txt2"
              href="/registration"
            >
              Create your Account
              <i
                class="fa fa-long-arrow-right m-l-5"
                aria-hidden="true"
              />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { authApi } from "../api/apiServices";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "LoginView",
  components: {},
  props: {},
  data() {
    return {
      username: "",
      password: "",
      showError: false,
      showSuccess: false,
    };
  },
  create() {
    $(() => {
      $(".js-tilt").tilt({
        scale: 1.1,
      });
    });
  },
  methods: {
    async handleSubmit() {
      console.log("Trigger Login!");
      authApi
        .login({
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("jwt", response.data.jwt);
          console.log("Login complete!");
          this.showSuccess = true;
          setTimeout(() => {
            this.showSuccess = false;
          }, 1000);
          setTimeout(() => {
            this.$router.push("/");
          }, 1700);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.showError = true;
            setTimeout(() => {
              this.showError = false;
            }, 3000);
          }
        })
        .finally(() => {
          this.password = "";
          this.username = "";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/login/css/util.css";
@import "../assets/login/css/main.css";
@import "../assets/login/vendor/animate/animate.css";
@import "../assets/login/vendor/css-hamburgers/hamburgers.min.css";
@import "../assets/login/vendor/select2/select2.min.css";
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
