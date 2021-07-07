import axios from 'axios';

export const addSelected = (placeId) => {
    return axios.post(`api/users/favorites/selected`)
};

export const removeSelected = (placeId) => {
    return axios.delete(`api/users/favorites/selected`)
};