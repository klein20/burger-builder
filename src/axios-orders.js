import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8537d.firebaseio.com/'
});

export default instance;