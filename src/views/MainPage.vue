<template>
  <div>
    <NavBar />
    <HomeContent />
  </div>
</template>


<script>
import NavBar from "../components/NavBar.vue";
import HomeContent from "../components/HomeContent.vue";
export default {
  name: "MainPage",
  components: { NavBar, HomeContent },
};
</script>