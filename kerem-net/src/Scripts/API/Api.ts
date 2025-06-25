import axios from 'axios';

const API_ADDRESS: string = "http://localhost:3002/";

const api = axios.create({
    baseURL: API_ADDRESS,
    timeout: 1000,
});

export default api;     