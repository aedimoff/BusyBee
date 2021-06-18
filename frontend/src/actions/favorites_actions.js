// import * as ApiUtil from '../util/favorites_api_util';

// export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES"
// export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
// export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

// export const receiveFavorites = (favorites) => ({
//         type: RECEIVE_FAVORITES,
//         favorites
// });

// export const receiveFavorite = (placeId, userId) => ({
//         type: RECEIVE_FAVORITE,
//         favorite
// });

// export const removeFavorite = (placeId) => ({
//         type: REMOVE_FAVORITE,
//         placeId
// });

// export const fetchFavorites = () => dispatch => (
//     ApiUtil.fetchFavorites()
//     .then(favorites => dispatch(receiveFavorites(favorites)))
//     .catch(err => console.log(err))
// );

// export const fetchFavorite = (placeId) => dispatch => (
//     ApiUtil.fetchFavorite(placeId)
//     .then(favorite => dispatch(receiveFavorite(favorite)))
//     .catch(err => console.log(err))
// );



// export const deleteFavorite = (placeId) => dispatch => (
//     ApiUtil.deleteFavorite(placeId)
//     .then((placeId) => dispatch(removeFavorite(placeId)))
//     .catch(err => console.log(err))
// );