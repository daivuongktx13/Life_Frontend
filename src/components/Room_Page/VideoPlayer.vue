<template>
  <div class="overflow-hidden z-0" style="width: 100vw; height: 100vh">
    <div id="loading-gif">
      <div class="flex flex-col items-center">
        <img
          src="https://github.githubassets.com/images/mona-loading-default.gif"
          alt="Loading Gif"
          class="w-1/4 h-1/4"
        />
        <div class="text-white text-sm">One moment please ...</div>
      </div>
    </div>
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
      autoplay
      loop
      muted
    >
      <source src="../../assets/bg_vd.mp4" type="video/mp4" />
    </video>
  </div>
  <!-- <video id="video-player" src="../../assets/bg_vd.mp4" type="video/mp4" autoplay muted loop></video> -->
</template>

<script>
import $ from "jquery";
export default {
  name: "VideoPlayer",
  data() {
    return {
      // videoLoaded: false,
    };
  },
  mounted() {
    var vid = document.getElementById("video");
    vid.oncanplay = function () {
      $(() => {
        $("#video").show();
        $("#loading-gif").hide();
      });
    };
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
#loading-gif {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 20%;
  min-height: 20%;
  max-height: 30%;
  max-width: 30%;
  height: auto;
  width: auto;
}
</style>