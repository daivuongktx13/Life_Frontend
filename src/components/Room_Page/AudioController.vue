<template>
  <div class="flex flex-row-reverse items-center">
    <div>
      <button
        id="trigger-volume"
        class="w-16 h-16 rounded-full"
        style="background-color: rgb(35, 41, 49)"
      >
        <i v-if="muted" class="fa-solid fa-volume-xmark fa-lg text-white" />
        <i v-if="low" class="fa-solid fa-volume-low fa-lg text-white" />
        <i v-if="high" class="fa-solid fa-volume-high fa-lg text-white" />
      </button>
    </div>
    <div
      id="volume-controller"
      class="slidecontainer p-2 rounded-md mr-3 hidden"
      style="background-color: rgb(35, 41, 49)"
    >
      <div class="flex flex-row-reverse">
        <input
          @change="setPlayerVolume"
          id="myRange"
          v-model="volume"
          type="range"
          min="0"
          max="100"
          value="0"
          class="slider"
        />
        <div class="mr-3 p-1 text-white rounded-full">
          {{ volume }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
import category from "../../store/category";

export default {
  name: "AudioController",
  data() {
    return {
      volume: 0,
    };
  },
  methods: {
    setPlayerVolume(){
      this.player.unMute();
      this.player.setVolume(this.volume);
    }
  },
  computed: {
    muted() {
      return this.volume == 0;
    },
    low() {
      return this.volume > 0 && this.volume <= 50;
    },
    high() {
      return this.volume > 50 && this.volume <= 100;
    },
    player() {
      return category.getters.getPlayer;
    },
  },
  created() {
    $(() => {
      $("#trigger-volume").click(function () {
        if ($("#volume-controller").is(":hidden") == true) {
          $("#volume-controller").show("slow");
          $("#pomodoro").hide("fast");
          $("#profileMenu").hide("fast");
        } else {
          $("#volume-controller").hide("fast");
        }
      });
    });
  },
};
</script>

<style>
</style>