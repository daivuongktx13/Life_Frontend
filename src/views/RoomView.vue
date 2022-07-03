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
import { authApi } from "../api/apiServices";
export default {
  name: "RoomView",
  components: { VideoPlayer, Widget, ChatBox },
  mounted(){
    if(localStorage.getItem("jwt") === null){
      this.$router.push("/login");
    } else {
      authApi.jwtValidate({
        jwt: localStorage.getItem("jwt"),
      }).then((response) => {
          if(response.data == false) {
            this.$router.push("/login");
          }
      }).catch((error) => {
        console.log(error);
      })
    }
  }
};
</script>


