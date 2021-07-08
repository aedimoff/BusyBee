import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const RECIEVE_LOCATION = "RECIEVE_LOCATION";

export const receiveuser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const receiveUserSignIn = (user) => ({
  type: RECEIVE_USER_SIGN_IN,
  user: user,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
  favorite,
});

export const receiveAllFavorites = (favorites) => ({
  type: RECEIVE_ALL_FAVORITES,
  favorites
});

export const removeFavorite = (place_id) => ({
    type: REMOVE_FAVORITE,
    place_id
});

export const setUserCurrentLocation = currentLocation => ({
  type: RECIEVE_LOCATION,
  currentLocation
})
export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then((res) => {
    handleLoginOrSignUpSuccess(res, dispatch);
  });

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((res) => {
      handleLoginOrSignUpSuccess(res, dispatch);
    })
    .catch((err) => {
      console.log(err)
      dispatch(receiveErrors(err.response.data));
    });

const handleLoginOrSignUpSuccess = (res, dispatch) => {
  const { token } = res.data;
  localStorage.setItem("jwtToken", token);
  APIUtil.setAuthToken(token);
  const decoded = jwt_decode(token);
  dispatch(receiveuser(decoded));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};

export const addFavorite = (favorite, user_id) => (dispatch) => {
  return (APIUtil.addFavorite(favorite, user_id)
    .then((_response) => dispatch(receiveFavorite(favorite)))
    .catch((err) => console.log(err)))
  };

export const deleteFavorite = (place_id, user_id) => (dispatch) => {
  APIUtil.deleteFavorite(place_id, user_id)
    .then((_response) => dispatch(removeFavorite(place_id)))
    .catch((err) => console.log("ERROR DELETING", err)); }

export const fetchAllFavorites = (userId) => (dispatch) => {
  APIUtil.getAllFavorites(userId)
    .then(favorites => dispatch(receiveAllFavorites(favorites)))
}


