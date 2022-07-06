<template>
  <div class="flex overflow-visible space-x-5 animate-slide transform-gpu">
    <Profile
      name="1"
      src="1.jpg"
    />
    <Profile
      name="2"
      src="2.jpg"
    />
    <Profile
      name="3"
      src="3.jpg"
    />
    <Profile
      name="4"
      src="4.jpg"
    />
    <Profile
      name="5"
      src="5.jpg"
    />
    <Profile
      name="6"
      src="6.jpg"
    />
  </div>
</template>

<script>
import Profile from "./Profile.vue";
export default {
  name: "ProfileSpace",
  components: {Profile},
  
};
</script>