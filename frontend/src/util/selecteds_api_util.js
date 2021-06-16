import axios from 'axios';

export const fetchSelecteds = () => {
    return axios.get(`api/user/favorites`)
};

export const fetchSelected = (placeId) => {
    return axios.get(`api/user/favorites/selected/${placeId}`)
};

export const addSelected = (placeId) => {
    return axios.post(`api/user/favorites/selected`)
};

export const removeSelected = (placeId) => {
    return axios.delete(`api/user/favorites/selected`)
};