<template>
  <div class="relative bg-black">
    <VideoPlayer/>
    <Widget />
    <ChatBox />
  </div>
</template>


<script>
import VideoPlayer from "../components/Room_Page/VideoPlayer.vue";
import Widget from "../components/Room_Page/Widget.vue";
import ChatBox from "../components/Room_Page/ChatBox.vue";
export default {
  name: "RoomView",
  components: { VideoPlayer, Widget, ChatBox },
};
</script>


