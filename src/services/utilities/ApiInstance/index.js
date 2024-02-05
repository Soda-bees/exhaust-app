import axios from 'axios';
export const baseURL = 'http://192.168.100.59:5000/'
// export const baseURL = "https://exhaust-backend.netlify.app/.netlify/functions/api/"
// export const baseURL = "http://192.168.100.59:9999/.netlify/functions/api/"
const timeout = 5000

const apiInstance = axios.create({
    baseURL,
    timeout,
    withCredentials: true,   
});



export default apiInstance;
