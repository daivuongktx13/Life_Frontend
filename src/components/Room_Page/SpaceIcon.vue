<template>
  <div
    class="p-2 hover:bg-white/10"
    style="border: 1px solid #515151; border-radius: 12px;"
  >
    <button
      class="flex flex-row hover:scale-125 transition-all"
      @click="goToRoom()"
    >
      <img
        :src="require(`../../assets/ico/${name}.png`)"
        :alt="name"
      >
      <i
        v-if="currentSpace == name.toLowerCase()"
        class="fa-solid text-white fa-comment"
      />
    </button>
  </div>
</template>


<script>
import category from '../../store/category';
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
  methods: {
    goToRoom() {
      this.$router.push(`/room/${this.name.toLowerCase()}`);
      category.commit("triggerReload");
    }
  },
};
</script>