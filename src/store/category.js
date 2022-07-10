import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const category = new Vuex.Store({
    state: {
        spaces: ["City", "Pets", "Beach", "Anime", "Cafe", "Game", "Nature", "Snow"],
        spaceVideoId: {
            "city": "-JhoMGoAfFc",
            "pets": "QhLMlA3Wb8w",
            "beach": "xGRjCa49C6U",
            "anime": "DbuebKNKQsQ",
            "cafe": "qMHbh6XmgwM",
            "game": "iYMdmxgZZk0",
            "nature": "fW-mixqTTwE",
            "snow": "smMBhPHCsiU",
            // "space": "7KXGZAEWzn0",
        },
        reloadVal: 1,
        player: null,
    },

    getters: {
        getSpaceLists: (state) => state.spaces,
        getPlayer: (state) => state.player,
        getSpaceCode: (state) => (space) => {
            return state.spaceVideoId[space];
        },
        getReloadVal: (state) => state.reloadVal,
    },

    mutations: {
        setPlayer(state, player){
            state.player = player;
        },
        triggerReload(state){
            state.reloadVal = !state.reloadVal
        },
    }
})

export default category;