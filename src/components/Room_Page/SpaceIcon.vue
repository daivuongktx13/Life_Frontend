<template>
    <button class="hover:scale-110">
        <span><img class="inline-block" 
            :src="require(`../../assets/ico/${name}.png`)"
            :alt="name">
          </span>
    </button>
</template>


<script>
export default{
    name: "SpaceIcon",
    props:{
        name: String, 
    },
}
</script>