<template>
  <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
    <div class="wrapper wrapper--w790">
      <div class="card card-5">
        <div class="card-heading">
          <h2 class="title">LIFE Registration Form</h2>
        </div>
        <div class="card-body">
          <div>
            <div class="form-row">
              <div class="name">Username</div>
              <div class="value">
                <div class="input-group">
                  <input class="input--style-5" type="text" />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Email</div>
              <div class="value">
                <div class="input-group">
                  <input v-model="username" class="input--style-5" type="email" required />
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="name">Password</div>
              <div class="value">
                <div class="input-group">
                  <input v-model="password" class="input--style-5" type="password" required />
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="name">Confirmed Password</div>
              <div class="value">
                <div class="input-group">
                  <input v-model="confirmedPassword" class="input--style-5" type="password" required/>
                </div>
              </div>
            </div>
            <div>
              <button
                @click="handleSubmit"
                class="rounded-md w-1/5 bg-red-500 text-white p-3 font-bold"
              >
                REGISTER
              </button>
            </div>
            <transition name="slide-fade">
              <div v-if="showError" class="text-center">
                <div class="txt2 text-red-700">Password does not match!</div>
              </div>
            </transition>
            <transition name="slide-fade">
              <div v-if="showSuccess" class="text-center">
                <div class="txt2 text-green-400">Register complete!</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Registration",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: "",
      confirmedPassword: "",
      showError: false,
      showSuccess: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.password != this.confirmedPassword) {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 2000);
        return;
      }
      axios
        .post("http://localhost:8080/registration", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.showSuccess = true;
          setTimeout(() => {
            this.showSuccess = false;
          }, 1000);
          setTimeout(() => {
            this.$router.push("/login");
          }, 1700);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
@import "../assets/reg/vendor/mdi-font/css/material-design-iconic-font.min.css";
@import "../assets/reg/vendor/font-awesome-4.7/css/font-awesome.min.css";
@import "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i";
@import "../assets/reg/vendor/select2/select2.min.css";
@import "../assets/reg/vendor/datepicker/daterangepicker.css";
@import "../assets/reg/css/main.css";
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