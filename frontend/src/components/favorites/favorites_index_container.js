import { connect } from "react-redux";
import { addFavorite, deleteFavorite, fetchAllFavorites } from "../../actions/session_actions";
import { receiveSelected, clearSelected, deleteSelected } from "../../actions/selected_actions";
import FavoritesIndex from "./favorites_index";

const mSTP = (state) => ({
  user: state.sessionApi.user,
  favorites: state?.sessionApi?.user?.favorites,
});

const mDTP = (dispatch) => ({
  addFavorite: (placeId) => dispatch(addFavorite(placeId)),
  deleteFavorite: (placeId, userId) => dispatch(deleteFavorite(placeId, userId)),
  receiveSelected: (favorite) => dispatch(receiveSelected(favorite)),
  fetchAllFavorites: (userId) => dispatch(fetchAllFavorites(userId)),
  deleteSelected: (favorite) => dispatch(deleteSelected(favorite)),
});

export default connect(mSTP, mDTP)(FavoritesIndex);
