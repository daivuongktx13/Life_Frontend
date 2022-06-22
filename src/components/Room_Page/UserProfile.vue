<template>
  <div>
    <div class="fixed z-10 top-0 right-0">
      <button id="trigger-profile" class="m-1">
        <i
          class="fa-solid fa-user text-white p-3 rounded-md"
          style="background-color: rgb(35, 41, 49)"
        ></i>
      </button>
    </div>
    <div id="profileMenu" class="hidden">
      <div
        id="profile"
        class="fixed z-10 rounded-md p-2 w-1/2 flex flex-col items-center space-y-10"
      >
        <div>
          <i
            class="fa-solid fa-user text-white p-4 rounded-full"
            style="background-color: black"
          ></i>
          <button>
            <i
              class="relative fa-solid text-white fa-camera"
              style="left: -0.5rem; top: 1rem"
            ></i>
          </button>
        </div>
        <div class="pr-2 font-bold text-white">User #</div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  name: "UserProfile",
  created() {
    $(() => {
      $("#trigger-profile").click(function () {
        if ($("#profileMenu").is(":hidden") == true) {
          $("#profileMenu").show("slow");
          $("#pomodoro").hide("fast");
          $("#volume-controller").hide("fast");
        } else {
          $("#profileMenu").hide("fast");
        }
      });
    });
  },
};
</script>

<style>
#profile {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgb(35, 41, 49);
}
</style>