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
    <form class="hidden" @submit.prevent="editProfile" id="profileMenu">
      <div
        id="profile"
        class="
          fixed
          z-10
          overflow-hidden
          rounded-md
          w-1/2
          h-5/6
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
              <!-- src="../../assets/ico/poro1301.jpg" -->
                <img
                  class="rounded-full object-fill"
                  style="min-height: 40px; min-width: 40px"
                  :key="reloadImage"
                  :src="image"
                  :alt="username"
                />
                <input
                  v-if="editting"
                  type="file"
                  class="hover:opacity-20 cursor-pointer rounded-md"
                  name="image"
                  @change="imageLoad"
                  ref="image"
                  accept="image/jpeg, image/png, image/jpg"
                  id="image"
                />
              </div>
              <div class="text-white inline font-sans text-sm sm:text-xl">
                {{ name }}
              </div>
            </div>
            <div>
              <div
                v-if="!editting"
                @click="editting = true"
                class="
                  rounded-md
                  text-white
                  p-2
                  hidden
                  md:block
                  hover:opacity-80
                  cursor-pointer
                  font-semibold
                  mt-5
                "
                style="background-color: rgb(88, 101, 242)"
              >
                Edit Profile
              </div>
              <!-- @click="editting = false" -->
              <input
                type="submit"
                value="Submit"
                v-if="editting"
                class="
                  rounded-md
                  text-white
                  p-2
                  px-6
                  hidden
                  bg-green-500
                  md:block
                  hover:opacity-80
                  cursor-pointer
                  font-semibold
                  mt-5
                "
              />
              <span
                @click="logout()"
                class="
                  relative
                  top-2
                  text-white
                  font-semibold
                  hover:opacity-90
                  hidden
                  md:block
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
          <div class="sm:text-base text-xs text-green-500">"{{ bio }}"</div>

          <div
            class="
              grid grid-cols-1
              sm:m-10
              w-5/6
              justify-center
              rounded-md
              mx-3
            "
            style="background-color: rgb(54, 57, 63)"
          >
            <div class="justify-between flex-col flex m-3">
              <div class="text-xs text-white">NAME</div>
              <input
                class="font-semibold bg-slate-500 text-white disabled:bg-self"
                type="text"
                name="name"
                id="name"
                autocomplete="#"
                v-model="user_name"
                :placeholder="name"
                :disabled="!editting"
              />
            </div>
            <!-- name="username"
                id="username" -->
            <div class="flex justify-between m-3 flex-col">
              <div class="text-xs text-white">USERNAME</div>
              <input
                class="font-semibold disabled:bg-self"
                disabled
                type="text"
                autocomplete="#"
                :placeholder="username"
              />
            </div>
            <div v-if="editting" class="flex justify-between m-3 flex-col">
              <div class="text-xs text-white">Profile</div>
              <input
                class="bg-slate-500 font-semibold text-white disabled:bg-self"
                type="text"
                name="bio"
                id="bio"
                autocomplete="#"
                v-model="user_bio"
                :placeholder="bio"
              />
            </div>
          </div>
          <div
            class="
              flex
              md:hidden
              mt-3
              flex-row
              items-center
              space-x-2
              ease-in
              duration-300
            "
          >
            <div
              @click="editting = true"
              v-if="!editting"
              class="
                rounded-md
                text-white
                p-1
                hover:opacity-80
                cursor-pointer
                font-semibold
              "
              style="background-color: rgb(88, 101, 242)"
            >
              Edit Profile
            </div>
            <input
              type="submit"
              value="Save"
              v-if="editting"
              class="
                rounded-md
                text-white
                p-1
                bg-green-500
                hover:opacity-80
                cursor-pointer
                font-semibold
              "
            />
            <div
              @click="logout()"
              class="
                bg-red-500
                cursor-pointer
                hover:opacity-100
                opacity-80
                p-1
                rounded-md
                text-white
              "
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import $ from "jquery";
import user from "../../store/user";
import { profileApi, authApi } from "../../api/apiServices";

export default {
  name: "UserProfile",
  data() {
    return {
      editting: false,
      user_img: null,
      user_name: "",
      user_bio: "",
      reloadImage: 1,
    };
  },
  computed: {
    name() {
      return user.getters.getName;
    },
    bio() {
      return user.getters.getBio;
    },
    username() {
      return user.getters.getUsername;
    },
    image() {
      return user.getters.getImage;
    },
    id() {
      return user.getters.getId;
    },
  },
  mounted() {
    // Validate JWT Token
    if (localStorage.getItem("jwt") === null) {
      this.$router.push("/login");
    } else {
      this.getProfile();
    }
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
    async editProfile() {
      var formData = new FormData();
      formData.append("name",this.user_name);
      formData.append("bio", this.user_bio);
      formData.append("imgUrl", `${this.id}.jpg`);
      formData.append("image", this.user_img);
      await profileApi
        .editProfile(this.id, formData)
        .then((response) => {
          this.user_bio = response.data.bio;
          this.user_name = response.data.name;
          user.commit("setProfile", response.data);
          this.reloadImage = !this.reloadImage;
          this.user_img = null;
        })
        .catch((error) => {
          console.log(error);
        });

      this.editting = false;
    },
    imageLoad() {
      this.user_img = this.$refs.image.files[0];
    },
    async getProfile() {
      await authApi
        .jwtValidate({
          jwt: localStorage.getItem("jwt"),
        })
        .then((response) => {
          if (response.data == "") {
            this.$router.push("/login");
          } else {
            user.commit("setId", response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      profileApi
        .getProfile(this.id)
        .then((response) => {
          this.user_bio = response.data.bio;
          this.user_name = response.data.name;
          user.commit("setProfile", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
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