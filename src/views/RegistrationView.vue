<template>
  <div class="bg-img" style="position: relative">
    <Transition name="errorshow">
      <p class="error" v-if="showError">Password does not match!</p>
    </Transition>
    <Transition name="successshow">
      <p class="success" v-if="showSuccess">Register successfully!</p>
    </Transition>
    <VideoContainer />
    <div class="form_into">
      <form class="registration" @submit.prevent="handleSubmit">
        <header>Registration</header>
        <div class="field">
          <span class="fa fa-user"></span>
          <input
            type="text"
            v-model="username"
            required
            placeholder="Email or Phone"
          />
        </div>
        <div class="field space">
          <span class="fa fa-lock"></span>
          <input
            type="password"
            v-model="password"
            required
            placeholder="Password"
          />
          <span class="show"> SHOW </span>
        </div>
        <div class="field space">
          <span class="fa fa-check-circle"></span>
          <input
            type="password"
            v-model="confirmedPassword"
            required
            placeholder="Confirm Password"
          />
          <span class="show"> SHOW </span>
        </div>

        <div class="field space">
          <input type="submit" value="REGISTER" />
        </div>
        <div class="register">Or register with</div>
        <div class="link">
          <div class="google">
            <i class="fa fa-google">
              <span> Google </span>
            </i>
          </div>
        </div>
        <div class="signup">
          Already have account ?
          <router-link to="login">Back to Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VideoContainer from "../components/Login_Page/VideoContainer.vue";
import axios from "axios";
export default {
  name: "RegistrationView",
  props: {},
  components: { VideoContainer },
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
.errorshow-enter-from {
  opacity: 0;
}
.errorshow-enter-to {
  opacity: 1;
}
.errorshow-enter-active {
  transition: opacity 1s ease;
}

.errorshow-leave-from {
  opacity: 1;
}
.errorshow-leave-to {
  opacity: 0;
}
.errorshow-leave-active {
  transition: opacity 0.5s ease;
}

.successshow-enter-from {
  opacity: 0;
}
.successshow-enter-to {
  opacity: 1;
}
.successshow-enter-active {
  transition: opacity 1s ease;
}

.successshow-leave-from {
  opacity: 1;
}
.successshow-leave-to {
  opacity: 0;
}
.successshow-leave-active {
  transition: opacity 0.5s ease;
}
</style>