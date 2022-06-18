<template>
  <div class="fixed z-10 top-16 left-0">
    <div class="flex flex-col items-center">
      <div
        id="space-list"
        class="hidden flex-col pl-2 items-center space-y-3 w-14"
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
</template>

<script>
import SpaceIcon from "./SpaceIcon.vue";
export default{
    name: 'SpaceList',
    components: {SpaceIcon}
}
</script>