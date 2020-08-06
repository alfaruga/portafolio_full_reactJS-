import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mi-portafolio-alfaruga.firebaseio.com/'
});

export default instance;