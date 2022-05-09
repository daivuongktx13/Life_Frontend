<template>
  <div id="home" >
    <div class="flex justify-center py-10 text-xl font-bold">
      <h1>Welcome to our main page!</h1>
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