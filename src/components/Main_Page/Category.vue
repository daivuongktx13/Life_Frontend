<template>
  <div id="category" class="flex flex-col items-center m-20 space-y-10">
    <div class="flex justify-center pt-5 pb-3 text-normal md:text-xl font-bold"
      style="font-family: Poppins-Regular;">
      Dive yourself into
    </div>
    <div class="flex flex-wrap justify-center space-x-2 w-1/3 mx-auto">
      <CategoryNode
        v-for="(space, index) in categoryList"
        :key="index"
        :name="space"
      />
    </div>
  </div>
</template>

<script>
import category from "../../store/category";
import CategoryNode from "./CategoryNode.vue";
export default {
  name: "Category",
  components: { CategoryNode },
  computed: {
    categoryList(){
      return category.getters.getSpaceLists;
    }
  },
  methods: {
    
  }
};
</script>