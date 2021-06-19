import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../actions/session_actions";
import FavoritesIndex from "./favorites_index";

const mSTP = (state) => ({
  user: state.sessionApi.user,
  favorites: state?.sessionApi?.user?.favorites,
});

const mDTP = (dispatch) => ({
  addFavorite: (placeId) => dispatch(addFavorite(placeId)),
  deleteFavorite: (placeId, userId) => dispatch(deleteFavorite(placeId, userId)),
});

export default connect(mSTP, mDTP)(FavoritesIndex);
