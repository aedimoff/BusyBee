import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = (userData) => {
  return axios.post("/api/users/register", userData);
};

export const login = (userData) => {
  return axios.post("/api/users/login", userData);
};

export const addFavorite = (favorite, user_id) => {
  console.log("userID in util", user_id)
  return axios.post(`api/users/favorites`, { favorite, user_id })
};

export const deleteFavorite = (place_id, user_id) => {
  return axios.delete(`api/users/favorites`, { place_id, user_id } );
};
