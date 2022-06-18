<template>
  <div class="flex flex-row-reverse items-center">
    <div>
      <button
        class="w-16 h-16 rounded-full"
        style="background-color: rgb(78, 140, 255)"
        data-collapse-toggle="audio-slider"
        aria-controls="audio-slider"
        aria-expanded="false"
      >
        <i v-if="muted" class="fa-solid fa-volume-xmark fa-lg text-white"></i>
        <i v-if="low" class="fa-solid fa-volume-low fa-lg text-white"></i>
        <i v-if="high" class="fa-solid fa-volume-high fa-lg text-white"></i>
      </button>
    </div>

    <div id="audio-slider" class="slidecontainer mr-3 hidden flex flex-row-reverse">
      <input
        v-model="volume"
        type="range"
        min="0"
        max="100"
        value="0"
        class="slider"
        id="myRange"
      />
      <div class="mr-3 bg-blue-500 p-1 text-white rounded-full">{{volume}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AudioController",
  data() {
    return {
      volume: 0,
    };
  },
  computed:{
    muted() {
      return this.volume == 0;
    }, 
    low() {
      return this.volume > 0 && this.volume <= 50;
    },
    high(){
      return this.volume > 50 && this.volume <= 100;
    }

  },
};
</script>

<style>

</style>