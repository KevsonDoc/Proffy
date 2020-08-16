import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffyapi3.herokuapp.com'
});

export default api;