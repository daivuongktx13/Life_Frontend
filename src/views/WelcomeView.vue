<template>
  <div id="welcome">
    <component :is="getMode">
      <h1>{{ getMode }}</h1>
    </component>
    <ControlView />
  </div>
</template>

<script>
import ControlView from "../components/Welcome_Page/ControlView.vue";
import slide from "../components/Welcome_Page/SlideView.vue"
import fade from "../components/Welcome_Page/FadeView.vue";
import slideUp from "../components/Welcome_Page/SlideUp.vue";
import zoom from "../components/Welcome_Page/ZoomView.vue"
import flipX from "../components/Welcome_Page/FlipX.vue"
import flipY from "../components/Welcome_Page/FlipY.vue"

import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { ControlView, fade, slide, slideUp, zoom, flipX, flipY },
  computed: {
    ...mapGetters(["getMode"]),
  },
};

</script>

<style>

/* body {
  background: #202020;
  font-size: 62.5%;
} */

#welcome {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #4c4c4c;
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, #4c4c4c),
    color-stop(36%, rgba(43, 43, 43, 0.74)),
    color-stop(71%, rgba(28, 28, 28, 0.5)),
    color-stop(100%, rgba(19, 19, 19, 0.29))
  );
  background: linear-gradient(
    135deg,
    #4c4c4c 0%,
    rgba(43, 43, 43, 0.74) 36%,
    rgba(28, 28, 28, 0.5) 71%,
    rgba(19, 19, 19, 0.29) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#4c4c4c", endColorstr="#131313", GradientType=1 );
  color: #fff;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.controls {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%, 0);
  width: 100%;
  margin-top: 30px;
  text-align: center;
  padding: 0;
}
.controls li {
  opacity: 0.6;
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  height: 30px;
  margin: 0 10px;
  padding: 0 30px;
  border-radius: 10px;
  font: 0.8rem/30px Arial, sans-serif;
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  background: #505050;
}
.controls li.active {
  background: #b6b6b6;
}

.page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #c0c0c0;
}
.page .center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 3rem;
  text-align: center;
}
.page h1 {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  font-size: 2.8rem;
  text-transform: capitalize;
}
.page p {
  font-family: "Vollkorn", Georgia, Times, serif;
  font-size: 1.1rem;
}
.page a {
  transition: color 200ms ease-out;
  color: rgba(153, 153, 153, 0.8);
}
.page a:hover {
  color: rgba(102, 102, 102, 0.8);
}

.active-animation {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}

.fade {
  background: #461467;
}

.slide {
  background: #ffba57;
}

.zoom {
  background: #ffc8bb;
}

.flipX {
  background: #00dfcf;
}

.flipY {
  background: #8ed3c9;
}

.slideUp {
  background: #f5dd79;
}
</style>
