import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const search = new Vuex.Store({
    state: {
       mode: 0, 
    },

    getters: {
       getMode: (state) => state.mode,
    },

    mutations: {
        setMode(state, mode) {
            state.mode = mode;
        },
    }
})

export default search;