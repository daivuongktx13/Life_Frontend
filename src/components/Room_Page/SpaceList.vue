<template>
  <div class="fixed flex flex-row ml-2 z-10 top-16 left-0">
    <div
      class="flex flex-col items-center rounded-md p-2"
      style="background-color: rgb(35, 41, 49)"
      id="space-list"
    >
      <div class="flex-col items-center space-y-3 w-12">
        <SpaceIcon name="Code" />
        <SpaceIcon name="Pets" />
        <SpaceIcon name="Beach" />
        <SpaceIcon name="Anime" />
        <SpaceIcon name="Cafe" />
        <SpaceIcon name="Game" />
        <SpaceIcon name="Nature" />
        <SpaceIcon name="Snow" />
      </div>
    </div>
    <div class="cursor-pointer pt-16" id="trigger-list">
      <i id="trigger-list-left" class="fa-solid text-white fa-lg py-3 px-3 fa-caret-left rounded-r-md" style="background-color: rgb(60, 69, 81);"></i>
      <i id="trigger-list-right" class="fa-solid text-white fa-lg py-3 px-3 fa-caret-right rounded-r-md" style="background-color: rgb(60, 69, 81);display: none;"></i>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import SpaceIcon from "./SpaceIcon.vue";
export default {
  name: "SpaceList",
  components: { SpaceIcon },
  computed: {},
  mounted() {
    $(() => {
      $("#trigger-list").click(function () {
        if ($("#space-list").is(":hidden") == true) {
          $("#space-list").show("slow");
          $("#trigger-list-left").show();
          $("#trigger-list-right").hide();
        } else {
          $("#space-list").hide("fast");
          $("#trigger-list-left").hide();
          $("#trigger-list-right").show();
          
        }
      });
    });
  },
};
</script>