<template>
    <video id="my_video"  autoplay loop style="max-height: 100%; max-width: 100%" >
                <source src="../assets/bg_vd.mp4" type="video/mp4">
            </video>
</template>

<script>
export default {
  name: "VideoContainer",
  data() {
    return {};
  },
  mounted(){
      var video = document.getElementById('my_video');
      video.muted=true; // Must be muted so that video can play
      video.play();
  }
};
</script>

