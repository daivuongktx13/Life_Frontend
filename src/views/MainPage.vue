<template>
  <div id="mainpage" class="scroll-smooth">
    <NavBar />
    <HomeContent />
    <Category />
    <CategoryContent/>
    <About />
  </div>
</template>


<script>
import NavBar from "../components/Main_Page/NavBar.vue";
import HomeContent from "../components/Main_Page/HomeContent.vue";
import Category from "../components/Main_Page/Category.vue";
import CategoryContent from "../components/Main_Page/CategoryContent.vue";
import About from "../components/Main_Page/About.vue";
export default {
  name: "MainPage",
  components: { NavBar, HomeContent, Category, CategoryContent, About },
  methods: {},
};
</script>