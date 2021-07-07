import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../actions/session_actions";
import { receiveSelected, removeSelected, clearSelected } from "../../actions/selected_actions";
import FavoritesIndex from "./favorites_index";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  user: state.sessionApi.user,
  favorites: state?.sessionApi?.user?.favorites,
});

const mDTP = (dispatch) => ({
  addFavorite: (placeId) => dispatch(addFavorite(placeId)),
  deleteFavorite: (placeId, userId) => dispatch(deleteFavorite(placeId, userId)),
  receiveSelected: (favorite) => dispatch(receiveSelected(favorite))
});

export default connect(mSTP, mDTP)(FavoritesIndex);
