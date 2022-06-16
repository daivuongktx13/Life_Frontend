<template>
    <div class="relative overflow-clip">
        <NavVue />
        <VideoPlayer />
    </div>
</template>


<script>
import VideoPlayer from "../components/Room_Page/VideoPlayer.vue";
import NavVue from "../components/Room_Page/Nav.vue";
export default {
  name: "RoomView",
  components: { VideoPlayer, NavVue },
};
</script>


