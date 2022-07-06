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
  name: "ZoomView",
  props: {},
  computed: {
    ...mapGetters(["getMode"]),
  },
  methods: {
    ...mapMutations(["setMode"]),

    enter(el, done) {
      gsap.set(el, {
         autoAlpha: 0,
        scale: 2,
        transformOrigin: '50% 50%'
      });
      gsap.to(el, {
        autoAlpha: 1,
        scale: 1,
        duration: 2,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done
      });
    },
  },
};
</script>

<style>
</style>