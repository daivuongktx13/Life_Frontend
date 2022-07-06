<template id="page">
  <transition
    :css="false"
    appear
    @enter="enter"
    @leave="leave"
  >
    <div
      class="page"
      :class="getMode"
    >
      <div class="center">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from "gsap";
import { Power4 } from "gsap";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SlideUp",
  props: {},
  computed: {
    ...mapGetters(["getMode"]),
  },
  methods: {
    ...mapMutations(["setMode"]),

    enter(el, done) {
      gsap.set(el, {
        y: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: "50% 50%",
      });
      gsap.to(el, {
        keyframes: {
          "50%": { y: 0, scale: 0.8 },
          "100%": { scale: 1, transformOrigin: "50% 50%" },
          easeEach: Power4.easeOut,
        },
        duration: 2,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        y: window.innerHeight * -1.5,
        ease: Power4.easeOut,
        onComplete: done,
      });
    },
  },
};
</script>

<style>
</style>