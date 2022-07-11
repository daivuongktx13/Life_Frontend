<template>
  <button
    class="px-3 border-2 py-1 my-2 border-gray-400 rounded-full font-medium 
    shadow-sm hover:scale-110 hover:text-sky-500"
    @click="goToRoom"
  >
    <span><img
      class="inline-block"
      width="20px"
      height="20px" 
      :src="require(`../../assets/ico/${name}.png`)"
      :alt="name"
    >
    </span>
    {{ name }}
  </button>
</template>

<script>
export default {
    name:"CategoryNode",
    props:{
        name: String, 
    },
    methods:{
        goToRoom(){
            this.$router.push(`/room/${this.name.toLowerCase()}`);
        }
    }
}
</script>
