<template id="controls">
  <div>
    <ul class="controls">
      <li
        class="logout"
        @click="logout"
      >Logout</li>
      <li
        v-for="(animation, index) in getAnimations"
        :key="index"
        :class="{ active: animation === getMode }"
        @click.prevent="setMode(animation)"
      >
        {{ animation }}
      </li>
      <li
        class="start"
        @click="pushToMain()"
      >Start</li>
    </ul>
    <ul class="paginationControl">
      <li
        v-if="getIndexMode != 0"
        id="previous"
        @click="previousMode"
      >
        &lt;
      </li>
      <li
        v-if="getIndexMode != 5"
        id="next"
        @click="nextMode"
      >
        &gt;
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ControlView",
  props: {},

  async created() {
  },

  computed: {
    ...mapGetters(["getMode", "getAnimations", "getIndexMode"]),
  },
  methods: {
    ...mapMutations(["setMode", "nextMode", "previousMode"]),
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    pushToMain(){
      this.$router.push("/");
    }
  },
};
</script>

<style>
.logout,
.start {
  opacity: 0.6;
  cursor: pointer;
  overflow: hidden;
  height: 30px;
  margin: 0 10px;
  padding: 0 30px;
  border-radius: 10px;
  font: 0.8rem/30px Arial, sans-serif;
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  background: #505050;
}
.logout {
  float: left;
  color: orange;
}
.start {
  float: right;
  color: yellow;
}
.paginationControl {
  position: absolute;
  top: 50%;
  width: 100%;
  padding: 0;
  transform: translate(0%, -50%);
}
.paginationControl li {
  list-style-type: none;
  display: inline-block;
  cursor: pointer;
}
#previous {
  float: left;
  padding-left: 10%;
}
#next {
  float: right;
  padding-right: 10%;
}

</style>