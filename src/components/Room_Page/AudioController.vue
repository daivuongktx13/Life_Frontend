<template>
  <div class="flex flex-row-reverse items-center">
    <div>
      <button
        id="trigger-volume"
        class="w-16 h-16 rounded-full"
        style="background-color: rgb(78, 140, 255)"
      >
        <i v-if="muted" class="fa-solid fa-volume-xmark fa-lg text-white"></i>
        <i v-if="low" class="fa-solid fa-volume-low fa-lg text-white"></i>
        <i v-if="high" class="fa-solid fa-volume-high fa-lg text-white"></i>
      </button>
    </div>
    <div id="volume-controller" class="slidecontainer mr-3 hidden">
      <div class=" flex flex-row-reverse">
        <input
        v-model="volume"
        type="range"
        min="0"
        max="100"
        value="0"
        class="slider"
        id="myRange"
      />
      <div class="mr-3 bg-blue-500 p-1 text-white rounded-full">
        {{ volume }}
      </div>
      </div>
      
    </div>
  </div>
</template>


<script>
import $ from 'jquery'
export default {
  name: "AudioController",
  data() {
    return {
      volume: 0,
      isVolumeShown: false,
    };
  },
  created(){
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
  }
  ,
  methods: {},
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
  },
};
</script>

<style>
</style>