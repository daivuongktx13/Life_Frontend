<template>
  <div class="relative bg-black">
    <VideoPlayer />
    <Widget />
    <ChatBox :key="reload" />
  </div>
</template>


<script>
import category from "../store/category";
import VideoPlayer from "../components/Room_Page/VideoPlayer.vue";
import Widget from "../components/Room_Page/Widget.vue";
import ChatBox from "../components/Room_Page/ChatBox.vue";
export default {
  name: "RoomView",
  components: { VideoPlayer, Widget, ChatBox },
  data(){
    return {

    }
  },
  mounted(){
  },
  computed: {
    reload(){
      return category.getters.getReloadVal;
    }
  }
};
</script>


