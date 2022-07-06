<template>
  <div class="flex-none w-1/3 rounded-md bg-slate-50 my-10 shadow-2xl">
    <div
      class="mx-auto"
      style="width: 0px"
    >{{ name }}</div>
    <div>
      <img
        :src="require(`../../assets/main-img/${src}`)"
        :alt="name"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    name: String,
    src: String,
  },
};
</script>