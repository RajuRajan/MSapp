import Axios from 'axios';


export const API = Axios.create({
    baseURL: 'http://3.6.90.52:5000',
    headers: {
        'Content-Type': 'application/json'
    }
})