import { fetchFavorites, fetchFavorite } from '../util/favorites_api_util';

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES"
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const receiveFavorites = (favorites) => ({
        type: RECEIVE_FAVORITES,
        favorites
});

export const receiveFavorite = (favorite) => ({
        type: RECEIVE_FAVORITES,
        favorite
});

export const receiveFavorite = (favoriteId) => ({
        type: REMOVE_FAVORITE,
        favoriteId
});