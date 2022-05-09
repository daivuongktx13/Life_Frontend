<template>
  <div id="category">
    <div class="flex justify-center pt-5 pb-3 text-xl font-bold">
      <em>Choose a category to start:</em>
    </div>
    <div class="flex flex-wrap justify-center space-x-2 w-1/3 mx-auto">
      <CategoryNode name="Nature"/>
      <CategoryNode name="Pets"/>
      <CategoryNode name="Snow"/>
      <CategoryNode name="Space"/>
      <CategoryNode name="Game"/>
      <CategoryNode name="Code"/>
      <CategoryNode name="City"/>
      <CategoryNode name="Cafe"/>
      <CategoryNode name="Beach"/>
      <CategoryNode name="Anime"/>
    </div>
  </div>
</template>

<script>
import CategoryNode from "./CategoryNode.vue";
export default {
  name: "CategoryContent",
  components: { CategoryNode },
  methods: {
    
  },
};
</script>