import authHeader from "./authJWT";
import axios from "axios";
import {baseApiUrl} from "./base";
import noAuthHeader from "./noAuth";

export const authApi = {
    login(data) {
        return axios.post(`${baseApiUrl}/login`, data, noAuthHeader);
    },
    register(data) {
        return axios.post(`${baseApiUrl}/registration`, data, noAuthHeader);
    },
    jwtValidate(data) {
        return axios.post(`${baseApiUrl}/jwt-validate`, data, noAuthHeader);
    }
}

export const roomApi = {
    getAllUsersInSpace(space, data){
        return axios.get(`${baseApiUrl}/${space}/users`, data);
    }
}


export const profileApi = {
    getProfile(userId) {
        return axios.get(`${baseApiUrl}/profile/${userId}`,{}, {authHeader});
    },
    editProfile(userId, data) {
        return axios.post(`${baseApiUrl}/profile/edit/${userId}`, data, {authHeader})
    },

}
