<template>
  <div id="home">
    <div class="flex-col flex items-center">
      <div id="maintext" class="flex justify-center py-5 md:py-10 opacity-80 hover:opacity-100" 
      style="font-family: 'Dancing Script', cursive;font-size: 60px;"
      >
        Welcome to our main page
      </div>
      <div class="grid grid-cols-1 justify-center text-xs md:text-base" 
        style="font-family: Poppins-Regular;">
        <div>Explore hundreds of spaces</div>
        <div>Build your personalized space!</div>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
</style>