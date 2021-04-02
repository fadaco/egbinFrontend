import axios from 'axios'
export const BASE_URL = 'http://127.0.0.1:5500/api/';
import Cookies from 'js-cookie'

export const SAVE_TOKEN = (key, value) => {
    Cookies.set(key, value)
}

export const GET_TOKEN =  (key) => {
     Cookies.get(key)
}

export const DELETE_TOKEN = (key) => {
    Cookies.remove(key)
}

export const SERVER_REQUEST = async (url, type, body) => {
    try {
        const response = type.toLowerCase() === 'post' ?
        await axios.post(`${BASE_URL}${url}`, body, { headers: {
            'Content-Type': 'application/json',
            Authorization:  Cookies.get('token')
        }  })
    : await axios.get(`${BASE_URL}${url}`, { headers: {
            'Content-Type': 'application/json',
            Authorization: Cookies.get('token')
        } });

return response.data;
    } catch(err) {
        return err.response.data;
    }
}