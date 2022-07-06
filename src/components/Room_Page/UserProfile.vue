<template>
  <div>
    <div class="fixed z-10 top-0 right-0">
      <button id="trigger-profile" class="m-1">
        <i
          class="fa-solid fa-user text-white p-3 rounded-md"
          style="background-color: rgb(32, 34, 37)"
        />
      </button>
    </div>
    <div id="profileMenu" class="hidden">
      <div
        id="profile"
        class="
          fixed
          z-10
          overflow-hidden
          rounded-md
          w-1/2
          h-4/5
          flex flex-col
          items-center
        "
      >
        <div
          class="w-full h-1/5 md:h-1/4"
          style="background-color: rgb(207, 222, 228)"
        />
        <div
          class="w-full h-3/4 sm:h-5/6 flex flex-col items-center"
          style="background-color: rgb(32, 34, 37)"
        >
          <div
            class="
              relative
              flex flex-row
              w-5/6
              justify-between
              items-center
              space-x-5
              -top-5
              mx-5
            "
          >
            <!-- <i class="fa-solid fa-user text-white p-7 rounded-full" style="background-color: black"></i> -->
            <div class="flex flex-row items-center space-x-1">
              <div
                class="p-2 w-28 h-28 rounded-full"
                style="background-color: rgb(32, 34, 37)"
              >
                <img
                  class="hover:opacity-20 cursor-pointer rounded-full"
                  style="min-height: 60; min-width: 60px"
                  src="../../assets/ico/poro1301.jpg"
                  alt="Poro1031"
                />
              </div>
              <div class="text-white inline font-sans text-sm sm:text-xl">
                poro1301
              </div>
            </div>
            <div>
              <div
                class="
                  rounded-md
                  text-white
                  p-2
                  hidden
                  sm:block
                  hover:opacity-80
                  cursor-pointer
                  font-semibold
                  mt-5
                "
                style="background-color: rgb(88, 101, 242)"
              >
                Edit Profile
              </div>
              <span
                @click="logout()"
                class="
                  relative
                  top-2
                  text-white
                  font-semibold
                  hover:opacity-90
                  hidden
                  sm:block
                  py-2
                  px-6
                  bg-red-700
                  cursor-pointer
                  rounded-md
                "
                >Logout</span
              >
            </div>
          </div>
          <div
            class="grid grid-cols-1 sm:m-10 w-5/6 justify-center rounded-md mx-3"
            style="background-color: rgb(54, 57, 63)"
          >
            <div class="flex justify-between m-3">
              <div class="text-white">
                <div class="text-xs">USERNAME</div>
                <div class="font-semibold">poro1301</div>
              </div>
              <!-- <button class="px-3 py-1 rounded-md bg-black text-white">Edit</button> -->
            </div>
            <div class="justify-between hidden sm:flex m-3">
              <div class="text-white">
                <div class="text-xs">EMAIL</div>
                <div class="font-semibold">daivuongktx13@gmail.com</div>
              </div>
              <!-- <button class="px-3 py-1 rounded-md bg-black text-white">Edit</button> -->
            </div>
            <div class="flex justify-between m-3">
              <div class="text-white">
                <div class="text-xs">PHONE</div>
                <div class="font-semibold">0854147826</div>
              </div>
              <!-- <button class="px-3 py-1 rounded-md bg-black text-white">Edit</button> -->
            </div>
          </div>
          <div class="flex sm:hidden flex-col place-self-center">
            <div
              class="
                rounded-md
                text-white
                p-2
                hover:opacity-80
                cursor-pointer
                font-semibold
                mt-5
              "
              style="background-color: rgb(88, 101, 242)"
            >
              Edit Profile
            </div>
            <span
              @click="logout()"
              class="
                relative
                top-2
                text-white
                font-semibold
                hover:opacity-90
                py-2
                px-6
                bg-red-700
                cursor-pointer
                rounded-md
              "
              >Logout</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
import user from "../../store/user";
export default {
  name: "UserProfile",
  computed: {
    myname() {
      return user.getters.getUsername;
    },
  },
  mounted() {
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
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#profile {
  /* position: fixed; */
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  /* background-color: rgb(35, 41, 49); */
}
</style>