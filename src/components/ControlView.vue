<template id="controls">
  <div>
    <ul class="controls">
      <li class="logout" @click="logout">Logout</li>
      <li
        v-for="(animation, index) in getAnimations"
        :key="index"
        @click.prevent="setMode(animation)"
        v-bind:class="{ active: animation === getMode }"
      >
        {{ animation }}
      </li>
      <li class="start">Start</li>
    </ul>
    <ul class="paginationControl">
      <li id="previous" v-if="getIndexMode != 0" @click="previousMode">
        <b-icon icon="arrow-left-circle-fill" font-scale="4"></b-icon>
      </li>
      <li id="next" v-if="getIndexMode != 5" @click="nextMode">
        <b-icon icon="arrow-right-circle-fill" font-scale="4"></b-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "ControlView",
  props: {},

  async created() {
    // await axios
    //   .get("http://localhost:8080/", {
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("token"),
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.$router.push("login");
    //   });
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