import axios from 'axios';
// export const baseURL = 'http://192.168.100.59:5000/'
export const baseURL = 'https://exhaust-6ea7a8c16534.herokuapp.com/'

const timeout = 10000

const apiInstance = axios.create({
    baseURL,
    timeout,
    withCredentials: true,   
});



export default apiInstance;
