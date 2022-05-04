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
        getIndexMode: (state) => state.animations.indexOf(state.currentMode),
    },

    actions: {

    },

    mutations: {
        setMode(state, mode) {
            state.currentMode = mode;
        },
        nextMode(state){
            var index = state.animations.indexOf(state.currentMode);
            var value = state.animations[index + 1];
            this.commit("setMode", value);
        },
        previousMode(state){
            var index = state.animations.indexOf(state.currentMode);
            var value = state.animations[index - 1];
            this.commit("setMode", value);
        }
    }
})

export default store;