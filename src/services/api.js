import axios from 'axios';

const URL='http://localhost:3333';

const api = axios.create({
    baseURL:'http://localhost:3333'


});



export default api