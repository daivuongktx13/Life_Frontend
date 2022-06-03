<template>
  <div id="about">
    <div class="grid grid-cols-2 mx-5 mt-10 pb-4">
      <div class="flex justify-start font-bold text-sm md:text-xl">
        <a href="">Life</a>
      </div>
      <div class="flex justify-end mr-5">
        <a
          target="_blank"
          href="https://github.com/daivuongktx13/Life_Frontend"
        >
          <img
            width="30px"
            height="30px"
            class="bg-dark rounded-sm"
            src="../../assets/ico/Github.png"
            alt="Github"
          />
        </a>
      </div>
    </div>
    <div class="grid grid-cols-2 border-y py-5 mx-5">
      <div class="flex flex-col">
        <div class="font-bold text-sm md:text-xl pb-3">Project</div>
        <ul class="space-y-3 text-sm md:text-base">
          <li>Web Programming Project: <em>Life</em></li>
        </ul>
      </div>
      <div class="flex flex-col">
        <div class="pb-3 text-sm md:text-xl font-bold">Navigation</div>
        <ul class="space-y-3 text-sm md:text-base">
          <li>Home</li>
          <li>Category</li>
          <li>Explore</li>
          <li>About</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center text-center mx-5 py-5 text-sm md:text-xl font-semibold">
      Copyright © 2022 Project Life. All Rights Reserved.
    </div>
  </div>
</template>


<script>
export default {
  name: "About",
};
</script>