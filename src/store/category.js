import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const category = new Vuex.Store({
    state: {
        spaces: ["Nature", "Pets", "Snow", "Space", "Game", "Code", "City", "Cafe", "Beach", "Anime"],
    },

    getters: {
        getSpaceLists: (state) => state.spaces,
    },
})

export default category;