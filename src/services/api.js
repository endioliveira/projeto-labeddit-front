import axios from 'axios';

const apiUrl = process.env.REACT_APP_BACKEND_API

const needAuthApi = axios.create({
    baseURL: apiUrl,
})

const loginApi = axios.create({
    baseURL: apiUrl,
})

const signupApi = axios.create({
    baseURL: apiUrl,
})


let authToken = localStorage.getItem("labeddit-token");

needAuthApi.interceptors.request.use(
    (config) => {
        const axiosConfig = config;
        
        if(authToken){
            axiosConfig.headers.Authorization = authToken
        }
        return axiosConfig
    },
    (error) => Promise.reject(error),
);

export const api = {
    post(endpoint, body){
        return needAuthApi.post(endpoint, body)
    },

    get(endpoint){
        return needAuthApi.get(endpoint)
    },

    login(body){
        return loginApi.post('/users/login', body)
    },

    signupApi(body) {
        return signupApi.post('/users/signup', body)
    }

}

export default api;