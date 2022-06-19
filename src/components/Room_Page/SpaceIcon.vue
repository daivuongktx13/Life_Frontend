<template>
  <div>
    <button class="flex flex-row hover:scale-125 transition-all">
      <img :src="require(`../../assets/ico/${name}.png`)" :alt="name" />
      <i v-if="currentSpace == name.toLowerCase()" class="fa-solid text-white fa-comment"></i>
    </button>
    
  </div>
</template>


<script>
export default {
  name: "SpaceIcon",
  props: {
    name: String,
  },
  computed: {
    currentSpace() {
      return this.$route.params.category;
    },
  },
};
</script>