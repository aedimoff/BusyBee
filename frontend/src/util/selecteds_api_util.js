import axios from 'axios';

export const fetchSelecteds = () => {
    return axios.get(`api/user/favorites`)
};

export const fetchselected = (placeId) => {
    return axios.get(`api/user/favorites/selected/${placeId}`)
};

export const addselected = (placeId) => {
    return axios.post(`api/user/favorites/selected`)
};

export const removeSelected = (placeId) => {
    return axios.delete(`api/user/favorites/selected`)
};