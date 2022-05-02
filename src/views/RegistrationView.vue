<template>
  <div class="bg-img" style="position:relative">
    <VideoContainer />
    <div class="form_into">
      <form class="registration">
        <header>Registration</header>
        <div class="field">
          <span class="fa fa-user"></span>
          <input type="text" required placeholder="Email or Phone" />
        </div>
        <div class="field space">
          <span class="fa fa-lock"></span>
          <input type="password" required placeholder="Password" />
          <span class="show"> SHOW </span>
        </div>
        <div class="field space">
          <span class="fa fa-check-circle"></span>
          <input type="password" required placeholder="Confirm Password" />
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
import VideoContainer from "@/components/VideoContainer.vue";
export default {
  name: "RegistrationView",
  props: {},
  components: { VideoContainer },
};
</script>

<style>
</style>