import axios from 'axios';

export const fetchFavorites = () => {
    return axios.get(`api/user/favorites`)
};

export const fetchFavorite = (placeId) => {
    return axios.get(`api/user/favorites/${placeId}`)
};

export const addFavorite = (placeId) => {
    return axios.post(`api/user/favorites/`, placeId)
};

export const removeFavorite = (placeId) => {
    return axios.delete(`api/user/favorites/`, placeId)
};

