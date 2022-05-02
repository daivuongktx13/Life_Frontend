<template>
  <div class="bg-img" style="position:relative;">
    <VideoContainer />
    <div class="form_into">
      <form action="#" class="forgot_pass">
        <p>Enter email or phone to receive code:</p>
        <div class="field reset">
          <input type="text" />
        </div>
      </form>
      <div class="signup">
        <router-link to="login">Back to Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VideoContainer from "@/components/VideoContainer.vue";
export default {
  name: "ResetView",
  components: {
    VideoContainer,
  },
};
</script>

<style>
</style>