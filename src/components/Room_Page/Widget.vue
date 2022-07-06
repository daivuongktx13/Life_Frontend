<template>
  <div class="fixed top-0 left-0">
    <div
      class="py-2 px-4 m-2 rounded-md text-lg text-white cursor-pointer"
      style="background-color: rgb(35, 41, 49);"
      @click="pushToMain()"
    >
      Life
    </div>
    <UserProfileVue />
    <SpaceListVue />
    <div class="fixed bottom-1/4 right-6 flex flex-col items-end space-y-2">
      <AudioController />
      <ClockVue />
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
  methods:{
    pushToMain(){
      this.$router.push("/");
    }
  }
};
</script>


<style>
</style>