<template>
  <div id="mainpage" class="scroll-smooth">
    <NavBar />
    <HomeContent />
    <CategoryContent />
  </div>
</template>


<script>
import NavBar from "../components/NavBar.vue";
import HomeContent from "../components/HomeContent.vue";
import CategoryContent from "../components/CategoryContent.vue";
export default {
  name: "MainPage",
  components: { NavBar, HomeContent, CategoryContent },
  methods: {},
};
</script>