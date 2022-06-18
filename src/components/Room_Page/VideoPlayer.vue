<template>
  <div class="overflow-hidden z-0" style="width: 100vw; height: 100vh">
    <video
      id="video"
      height="100%"
      width="auto"
      style="
        max-width: 10000%;
        max-height: 5000%;
        min-width: 100%;
        min-height: 100%;
      "
      autoplay loop muted
    >
      <source src="../../assets/bg_vd.mp4" type="video/mp4" />
    </video>
  </div>
  <!-- <video id="video-player" src="../../assets/bg_vd.mp4" type="video/mp4" autoplay muted loop></video> -->
</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {};
  },
  mounted() {
    // var video = document.getElementById("video");
    // video.muted = true; // Must be muted so that video can play
    // video.play();
  },
};
</script>

<style>
#video-player {
  position: fixed;
  /* top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%); */
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}
</style>