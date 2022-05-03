import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentMode: 'fade',
        animations: ["fade", "slide", "slideUp", "zoom", "flipX", "flipY"],
    },

    getters: {
        getMode: (state) => state.currentMode,
        getAnimations: (state) => state.animations,
    },

    actions: {

    },

    mutations: {
        setMode(state, mode) {
            state.currentMode = mode;
        }
    }
})

export default store;