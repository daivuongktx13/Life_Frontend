<template>
  <div class="fixed top-0 left-0">
    <div class="overflow-clip z-20">
      <div class="inline">
        <button
          id="trigger-list"
          class="hover:scale-110"
          
        >
          <img
            class="inline"
            src="https://img.icons8.com/cotton/64/undefined/menu.png"
          />
        </button>
      </div>
      <div class="inline">
        <a
          class="p-3 rounded-md font-bold text-white"
          style="background-color: rgb(78, 140, 255)"
          href="/"
          >Life</a
        >
      </div>
      <!-- 35, 41, 49 -->
    </div>
    <UserProfileVue />
    <SpaceListVue />
    <div class="fixed bottom-1/4 right-6 flex flex-col items-end space-y-2">
      <AudioController />
      <ClockVue/>
    </div>
  </div>
</template>

<script>
import SpaceListVue from "./SpaceList.vue";
import UserProfileVue from "./UserProfile.vue";
import AudioController from "./AudioController.vue";
import ClockVue from "./Clock.vue";
export default {
  name: "Nav",
  components: { SpaceListVue, UserProfileVue, AudioController, ClockVue },
};
</script>


<style>
</style>