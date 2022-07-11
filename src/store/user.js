import Vue from 'vue'
import Vuex from 'vuex'
import {baseImageUrl} from '../api/base'
Vue.use(Vuex)

const user = new Vuex.Store({
    state: {
        profile : {
            id: 0,
            name: "",
            username : "",
            bio: "",
            imgUrl: "",        
        },
        stompClient: null,
    },

    getters: {
        getUsername: (state) => state.profile.username,
        getImage: (state) => `${baseImageUrl}/${state.profile.id}/${state.profile.imgUrl}`,
        getId: (state) => state.profile.id,
        getBio: (state) => state.profile.bio,
        getName: (state) => state.profile.name,
        getStompClient: (state) => state.stompClient,
    },

    mutations: {
        setProfile(state, profile){
            state.profile = profile;
        },
        setId(state, id){
            state.profile.id = id;
        },
        setStompClient(state, stomp){
            state.stompClient = stomp;  
        },
    }
})

export default user;