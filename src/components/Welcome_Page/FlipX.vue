<template id="page">
  <transition @enter="enter" @leave="leave" v-bind:css="false" appear>
    <div class="page" v-bind:class="getMode">
      <div class="center">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from "gsap";
import { Power4 } from "gsap";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "FlipX",
  props: {},
  computed: {
    ...mapGetters(["getMode"]),
  },
  methods: {
    ...mapMutations(["setMode"]),

    enter(el, done) {
      gsap.set(el, {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50%'
      });
      gsap.to(el, {
        autoAlpha: 1,
        rotationX: 0,
        ease: Power4.easeOut,
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