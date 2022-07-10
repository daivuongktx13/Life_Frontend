import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const user = new Vuex.Store({
    state: {
        profile : {
            id: 0,
            name: "Trung Cao Tiến",
            username : "poro1301",
            bio: "A Monster In League of Legend",
            image: '',        
        },
    },

    getters: {
        getUsername: (state) => state.profile.username,
        getImage: (state) => state.profile.image,
        getId: (state) => state.profile.id,
        getBio: (state) => state.profile.bio,
        getName: (state) => state.profile.name,
    },

    mutations: {
        setProfile(state, profile){
            state.profile = profile;
        },
        setId(state, id){
            state.profile.id = id;
        }
    }
})

export default user;