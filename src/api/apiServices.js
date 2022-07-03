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
    getAllUsersInSpace(space, header){
        return axios.get(`${baseApiUrl}/${space}/users`, header);
    }
}
