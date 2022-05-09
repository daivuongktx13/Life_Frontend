<template>
  <div id="mainpage" class="scroll-smooth">
    <NavBar />
    <HomeContent />
    <CategoryContent />
  </div>
</template>


<script>
import NavBar from "../components/Main_Page/NavBar.vue";
import HomeContent from "../components/Main_Page/HomeContent.vue";
import CategoryContent from "../components/Main_Page/CategoryContent.vue";
export default {
  name: "MainPage",
  components: { NavBar, HomeContent, CategoryContent },
  methods: {},
};
</script>