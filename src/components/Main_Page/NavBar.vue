<template>
    <div class="flex flex-col md:flex-row py-3 border static md:sticky top-0 z-10 bg-white/80 shadow-md">
    <div class="basis-1/2 md:pl-5 text-xl font-bold md:font-semibold">
      <div class="inline-flex pl-3 p-1" href="">Life</div>
      <button data-collapse-toggle="mobile-menu" type="button" class="float-right transition-all inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="hidden md:block basis-1/2 transition-all" id="mobile-menu">
      <div class="basis-1/2 flex flex-col md:flex-row justify-end space-y-0 md:space-x-8 text-xl items-center md:pr-10
        font-normal md:font-medium"> 
        <div class="hover:text-sky-500 transition" v-bind:class="{active: getActive('home')}"><a href="#home">Home</a></div>
        <div class="hover:text-sky-500 transition" v-bind:class="{active: getActive('category')}"><a href="#category">Category</a></div>
        <div class="hover:text-sky-500 transition"><a href="">Explore</a></div>
        <div class="hover:text-sky-500 transition" v-bind:class="{active: getActive('about')}"><a href="#about">About</a></div>
        <button @click="goToRoom" class="from-violet-500 to-cyan-600 bg-gradient-to-r 
          text-xs rounded-full py-1 px-2 font-normal text-white hover:scale-125 transition-all">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
    </div>
    </div>
    </div>
</template>

<script>
import category from '../../store/category';
export default {
    name: "NavBar",
    data() {
      return {
        nav: {
          "home": true,
          "category": false,
          "about": false,
        },
        listSpaces:['']
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
  methods:{
    getActive(section){
      return this.nav[section] && window.innerWidth >= 768;
    },
    goToRoom(){
      var spaces = category.getters.getSpaceLists;
      var randomItem = spaces[Math.floor(Math.random()*spaces.length)];
      this.$router.push(`/room/${randomItem.toLowerCase()}`);
    }
  },
  computed: {
    spaces(){
      category.getters.getSpaceLists;
    }
  }
}
</script>


<style scoped>
.active{
  color: rgb(14, 50, 233);
  border-bottom: 1px solid blue;
}

</style>