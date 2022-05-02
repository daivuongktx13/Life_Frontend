<template>
  <div class="bg-img" style="position: relative">
    <Transition name="errorshow">
      <p class="error" v-if="showError">Wrong username or password</p>
    </Transition>
    <Transition name="successshow">
      <p class="success" v-if="showSuccess">Login success!</p>
    </Transition>
    <VideoContainer />
    <div class="form_into">
      <form @submit.prevent="handleSubmit" class="login">
        <header>Login</header>
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
        <div class="pass">
          <router-link to="reset">Reset Password</router-link>
        </div>
        <div class="field">
          <input type="submit" value="LOGIN" />
        </div>
        <div class="login_with">Or login with</div>
        <div class="link">
          <div class="google">
            <i class="fa fa-google">
              <span> Google </span>
            </i>
          </div>
        </div>
        <div class="signup">
          Don't have account ?
          <router-link to="registration">Sign up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VideoContainer from "@/components/VideoContainer.vue";
import axios from "axios";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "LoginView",
  components: {
    VideoContainer,
  },
  data() {
    return {
      username: "",
      password: "",
      showError: false,
      showSuccess: false,
    };
  },
  methods: {
    async handleSubmit() {
      await axios
        .post("http://localhost:8080/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem('token',response.data.jwt);
          console.log("Login complete!");
          this.showSuccess = true;
          setTimeout(() => {
            this.showSuccess = false;
          }, 1000);
          setTimeout(() => {
            this.$router.push('/temp');
          }, 1500);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.showError = true;
            setTimeout(() => {
              this.showError = false;
            }, 3000);
          }
        }).finally(() => {
          this.password = '';
          this.username = '';
        });
    },
  },
  props: {},
};
</script>

<style scoped>
@import "@/assets/styles/login.css";
.errorshow-enter-from{
  opacity: 0;
}
.errorshow-enter-to{
  opacity: 1;
}
.errorshow-enter-active{
  transition: opacity 1s ease;
}

.errorshow-leave-from{
  opacity: 1;
}
.errorshow-leave-to{
  opacity: 0.0;
}
.errorshow-leave-active{
  transition: opacity 0.5s ease;
}

.successshow-enter-from{
  opacity: 0;
}
.successshow-enter-to{
  opacity: 1;
}
.successshow-enter-active{
  transition: opacity 1s ease;
}

.successshow-leave-from{
  opacity: 1;
}
.successshow-leave-to{
  opacity: 0.0;
}
.successshow-leave-active{
  transition: opacity 0.5s ease;
}

</style>
