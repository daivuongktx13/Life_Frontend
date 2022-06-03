<template>
  <div id="categorycontent" class="mt-10">
    <div class="flex justify-center" v-if="getMode == 1">
      <embed :src="require(`../../assets/rolling.svg`)" />
    </div>

    <div class="grid md:grid-cols-3 grid-cols-1 gap-4 px-10 md:px-10 lg:px-30 pt-10" v-if="getMode == 2">
      <SpaceProfile name="1" src="1" />
      <SpaceProfile name="2" src="2" />
      <SpaceProfile name="3" src="3" />
      <SpaceProfile name="4" src="4" />
      <SpaceProfile name="5" src="5" />
      <SpaceProfile name="6" src="6" />
    </div>
  </div>
</template>


<script>
import search from '../../store/search'
import SpaceProfile from "./SpaceProfile.vue";
export default {
  name: "CategoryContent",
  components: { SpaceProfile },
  computed: {
    getMode(){
        return search.getters.getMode;
    }
  }
};
</script>

