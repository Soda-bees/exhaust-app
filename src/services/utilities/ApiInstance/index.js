import axios from 'axios';
const baseURL = 'http://192.168.100.59:5000/'
const timeout = 5000
const defaultHeaders = {
    'Content-Type': 'application/json',
};

const apiInstance = axios.create({
    baseURL,
    timeout,
    // withCredentials: true,   
    // headers: defaultHeaders,
});



export default apiInstance;
