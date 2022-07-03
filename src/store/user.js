import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const user = new Vuex.Store({
    state: {
        username : '',
        image: '',
    },

    getters: {
        getUsername: (state) => state.username,
        getImage: (state) => state.image,
    },

    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setImage(state, image) {
            state.image = image;
        }
    }
})

export default user;