import { connect } from 'react-redux';
import { addFavorite } from '../../actions/session_actions';
import InfoWindow from './infoWindow';
import { closeModal } from "../../actions/modal_actions";
import { clearBusinessFromState } from '../../actions/business_actions';

const mSTP = (state) => ({
  userId: state.sessionApi.user.id,
  favorites: state?.sessionApi?.user?.favorites,
  selected: state.selectedFavorites.selected,
  business: state.business
});

const mDTP = dispatch => ({
  addFavorite: (property, user_id) => dispatch(addFavorite(property, user_id)),
  closeModal: () => dispatch(closeModal()),
  clearBusinessFromState: () => dispatch(clearBusinessFromState())
})

export default connect(mSTP, mDTP)(InfoWindow);