<template>
    <div class="flex flex-col">
      <div class="basis-4/5">
        <img class="rounded-md" :src="require(`../../assets/main-img/${src}.jpg`)" alt="" />
      </div>
      <div class="basis-1/5 w-0 mx-auto">{{name}}</div>
    </div>
</template>

<script>
export default {
    name: "SpaceProfile",
    props: {
        name: String, 
        src: String,
    },

}
</script>