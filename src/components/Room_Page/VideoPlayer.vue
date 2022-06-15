<template>
  <!-- <div >
    <video id="videoTest" autoplay loop>
      <source src="../../assets/bg_vd.mp4" type="video/mp4" />
    </video>
  </div> -->

  <div class="video-container">
  <video>
    <source src="../../assets/bg_vd.mp4" type="video/mp4" />
  </video>
</div>


</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {};
  },
  mounted() {
    var video = document.getElementById("videoTest");
    video.muted = true; // Must be muted so that video can play
    video.play();
  },
};
</script>