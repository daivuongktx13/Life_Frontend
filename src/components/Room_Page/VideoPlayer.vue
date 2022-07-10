<template>
  <div class="overflow-hidden z-0" style="width: 100vw; height: 100vh">
    <div v-if="!videoLoaded" id="loading-gif">
      <div class="flex flex-col items-center">
        <img
          src="https://github.githubassets.com/images/mona-loading-default.gif"
          alt="Loading Gif"
          class="w-1/4 h-1/4"
        />
        <div class="text-white text-sm">One moment please ...</div>
      </div>
    </div>
    <div id="video" class="video-container">
      <!-- <iframe
        src="https://www.youtube.com/embed/DbuebKNKQsQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&enablejsapi=1"
        frameBorder="0"
        allowFullScreen
      >
      </iframe> -->
      <youtube
        width="auto"
        height="auto"
        :video-id="currentSpaceId"
        ref="youtube"
        :player-vars="playerVars"
        @ready="ready"
      ></youtube>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import category from "../../store/category";
export default {
  name: "VideoPlayer",
  data() {
    return {
      videoLoaded: false,
    };
  },
  created() {
    let space = this.$route.params.category;
    this.videoId = category.getters.getSpaceCode(space);
    this.playerVars.playlist = this.videoId;
  },
  mounted() {},
  methods: {
    clickedOnVideo() {
      $("#pomodoro").hide("fast");
      $("#profileMenu").hide("fast");
      $("#volume-controller").hide("fast");
    },
    playVideo() {
      this.player.playVideo();
    },
    ready() {
      this.playVideo();
      this.videoLoaded = true;
      category.commit("setPlayer", this.$refs.youtube.player);
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    currentSpaceId() {
      return category.getters.getSpaceCode(this.$route.params.category);
    },
    playerVars() {
      return {
        mute: 1,
        autoplay: 1,
        loop: 1,
        controls: 0,
        origin: "http://localhost:3000",
        playlist: category.getters.getSpaceCode(this.$route.params.category),
      };
    },
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
.video-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

@media (max-aspect-ratio: 16 / 9) {
  .video-container iframe,
  .video-container video {
    width: 177.78vh !important;
    height: 120% !important;
  }
}

@media (min-aspect-ratio: 16 / 9) {
  .video-container iframe,
  .video-container video {
    width: 222vh !important;
    height: 130% !important;
  }
}

.video-container iframe {
  position: absolute;
  top: -10%;
  left: 0px;
  width: 100%;
  height: calc(100% + 120px);
  pointer-events: none;
}
</style>