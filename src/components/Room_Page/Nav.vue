<template>
  <div class="relative">
    <div class="absolute z-10">
      <div class="flex flex-col items-center">
        <div
          id="space-list"
          class="hidden flex-col pl-2 items-center space-y-3 w-14 mt-16"
        >
          <SpaceIcon name="Code" />
          <SpaceIcon name="Pets" />
          <SpaceIcon name="Beach" />
          <SpaceIcon name="Anime" />
          <SpaceIcon name="Cafe" />
          <SpaceIcon name="Game" />
          <SpaceIcon name="Nature" />
          <SpaceIcon name="Snow" />
        </div>
      </div>
    </div>
    <div class="absolute z-20 w-full">
      <div class="inline">
        <button
          class="hover:scale-110"
          data-collapse-toggle="space-list"
          aria-controls="space-list"
          aria-expanded="false"
        >
          <img class="inline" src="https://img.icons8.com/cotton/64/undefined/menu.png" />
        </button>
      </div>
      
      <div class="inline">
        <a class="p-3 rounded-md font-bold text-white italic" style="background-color:rgb(35, 41, 49)" href="/">Life</a>
      </div>
      <div class="inline float-right m-2">
        <i class="fa-solid fa-user text-white p-3 rounded-md" style="background-color:rgb(35, 41, 49)"></i>
      </div>
      
    </div>
  </div>
</template>

<script>
import SpaceIcon from "./SpaceIcon.vue";
export default {
  name: "Nav",
  components: { SpaceIcon },
};
</script>


<style>
</style>