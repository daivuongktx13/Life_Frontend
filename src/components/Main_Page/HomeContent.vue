<template>
  <div id="home">
    <div class="flex-col flex items-center space-y-16 my-32">
      <div id="maintext" class="flex justify-center text-2xl opacity-80 hover:opacity-100" 
      style="font-family: 'Dancing Script', cursive;"
      >
        Welcome to our main page
      </div>
      <div class="grid grid-cols-1 justify-center text-xs md:text-2xl" 
        style="font-family: 'Delius Swash Caps', cursive;">
        There is much more to the void that the eyes can see
        <!-- <div>Build your personalized space!</div> -->
      </div>
      <div class="grid grid-cols-1 justify-center text-xs md:text-2xl" 
        style="font-family: 'Delius Swash Caps', cursive;">
        Explore your own innermost thoughts in the search of these spaces to create your own productivity
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
@media screen and (min-width: 500px) {
  #maintext{
    font-size: 40px;
  }
}
@media screen and (min-width: 1000px) {
  #maintext{
    font-size: 60px;
  }
}
</style>