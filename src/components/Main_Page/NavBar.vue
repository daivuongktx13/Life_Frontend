<template>
    <div class="flex flex-row py-3 items-center border sticky top-0 z-10 bg-white/80 shadow-md">
    <div class="basis-1/2 pl-5 text-xl font-semibold"><a href="">Life</a></div>
    <div class="basis-1/2 flex flex-row justify-end space-x-8 text-xl items-center pr-10
    font-medium"> 
      <div class="hover:text-sky-500 transition" v-bind:class="{active: nav['home']}"><a href="#home">Home</a></div>
      <div class="hover:text-sky-500 transition" v-bind:class="{active: nav['category']}"><a href="#category">Category</a></div>
      <div class="hover:text-sky-500 transition"><a href="">Explore</a></div>
      <div class="hover:text-sky-500 transition" v-bind:class="{active: nav['about']}"><a href="#about">About</a></div>
      <button class="from-violet-500 to-cyan-600 bg-gradient-to-r 
      text-xs rounded-full py-1 px-2 font-normal text-white hover:scale-125 transition-all">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
      return {
        nav: {
          "home": true,
          "category": false,
          "about": false,
        },
      }
    },
    mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add 'active' class if observation target is inside viewport
        if (entry.intersectionRatio > 0) {
          this.nav[`${entry.target.id}`] = true;
        }
        // Remove 'active' class otherwise
        else {
          this.nav[`${entry.target.id}`] = false;
        }
      })
    });
    const home = document.querySelector("#home");
    const category = document.querySelector("#category");
    const about = document.querySelector("#about");
    observer.observe(home);
    observer.observe(category);
    observer.observe(about);
  },
}
</script>


<style scoped>
.active{
  color: rgb(14, 50, 233);
  border-bottom: 1px solid blue;
}
</style>