import axios from 'axios';

const API_ADDRESS: string = "http://localhost:3002/";

const api = axios.create({
    baseURL: API_ADDRESS,
    timeout: 1000,
});

export const ApiPost = (address:string, data:any, handlerSuccess: (response: any) => void, handlerError:(error: any) => void) => {
    api
        .post(address, data)
        .then((response) => {
            handlerSuccess(response);
        })
        .catch((error) => {
            handlerError(error);
        });
};


export default api;     