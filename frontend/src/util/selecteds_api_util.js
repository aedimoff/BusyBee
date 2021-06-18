import axios from 'axios';

export const fetchSelecteds = () => {
    return axios.get(`api/users/favorites`)
};

export const fetchSelected = (placeId) => {
    return axios.get(`api/users/favorites/selected/${placeId}`)
};

export const addSelected = (placeId) => {
    return axios.post(`api/users/favorites/selected`)
};

export const removeSelected = (placeId) => {
    return axios.delete(`api/users/favorites/selected`)
};