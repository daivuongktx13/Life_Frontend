<template>
  <div id="home">
    <div>
      <div class="flex justify-center py-10 text-xl font-bold">
        Welcome to our main page
      </div>
      <div class="flex justify-center font-medium">
        Explore hundreds of spaces<br />
      </div>
      <div class="flex justify-center mb-5 font-medium">
        Build your personalized space!<br />
      </div>
    </div>

    <div class="bg-slate-200 overflow-hidden">
      <ProfileSpace />
    </div>
  </div>
</template>


<script>
import ProfileSpace from "./ProfileSpace.vue";
export default {
  name: "HomeContent",
  components: { ProfileSpace },
};
</script>