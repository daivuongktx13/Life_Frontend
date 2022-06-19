<template>
  <div id="space-list" class="fixed z-10 top-16 left-0">
    <div class="flex flex-col items-center">
      <div
        class="flex-col pl-2 items-center space-y-3 w-14"
      >
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
  </div>
</template>

<script>
import $ from 'jquery'
import SpaceIcon from "./SpaceIcon.vue";
export default{
    name: 'SpaceList',
    components: {SpaceIcon},
    computed:{
      
    },
    mounted(){
      $(() => {
        $("#trigger-list").click(function(){
          if($('#space-list').is(':hidden') == true){
            $("#space-list").show('slow');
          } else {
            $("#space-list").hide("fast");
          }
        });
      })
    }
}
</script>