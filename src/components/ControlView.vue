<template id="controls">
  <ul class="controls">
    <li @click="logout" style="color:red;">Logout</li>
    <li
      v-for="(animation, index) in getAnimations"
      :key="index"
      @click.prevent="setMode(animation)"
      v-bind:class="{ active: animation === getMode }"
    >
      {{ animation }}
    </li>
    <li style="color:black;">Start</li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ControlView",
  props: {},

  async created() {
    await axios
      .get("http://localhost:8080/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.$router.push("login");
      });
  },

  computed: {
    ...mapGetters(["getMode", "getAnimations"]),
  },
  methods: {
    ...mapMutations(["setMode"]),
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>