<template>
  <div class="p-2 hover:bg-white/10" style="border: 1px solid #515151; border-radius: 12px;" >
    <button @click="goToRoom()" class="flex flex-row hover:scale-125 transition-all">
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
  methods: {
    goToRoom() {
      this.$router.push(`/room/${this.name.toLowerCase()}`);
    }
  },
  computed: {
    currentSpace() {
      return this.$route.params.category;
    },
  },
};
</script>