import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
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

export const removeFavorite = (placeId) => ({
  type: REMOVE_FAVORITE,
  placeId,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then((res) => {
    handleLoginOrSignUpSuccess(res, dispatch);
  });
// .catch((err) => {
//   dispatch(receiveErrors(err.response.data));
// });

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((res) => {
      handleLoginOrSignUpSuccess(res, dispatch);
    })
    .catch((err) => {
      dispatch(receiveErrors(err.response.data));
    });

const handleLoginOrSignUpSuccess = (res, dispatch) => {
  const { token } = res.data;
  localStorage.setItem("jwtToken", token);
  APIUtil.setAuthToken(token);
  const decoded = jwt_decode(token);
  dispatch(receiveCurrentUser(decoded));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};

export const addFavorite = (favorite) => (dispatch) =>
  APIUtil.addFavorite(favorite)
    .then((favorite) => dispatch(receiveFavorite(favorite)))
    .catch((err) => console.log(err));

export const deleteFavorite = (placeId) => (dispatch) =>
  APIUtil.deleteFavorite(placeId)
    .then((placeId) => dispatch(removeFavorite(placeId)))
    .catch((err) => console.log(err));
