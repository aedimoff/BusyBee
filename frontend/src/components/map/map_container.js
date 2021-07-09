import { connect } from 'react-redux';
import MapThing from './map'
import { addFavorite, setUserCurrentLocation } from '../../actions/session_actions'
import { closeModal, openModal } from '../../actions/modal_actions';
import { getDirections } from '../../actions/directions_actions';

const mapStateToProps = (state) => ({
  userId: state?.sessionApi?.user?.id,
  currentLocation: state.sessionApi.location,
  selected: state.selectedFavorites.selected,
});

const mapDispatchToProps = dispatch => ({
    addFavorite: (property, user_id) => dispatch(addFavorite(property, user_id)),
    setUserCurrentLocation: (currentLocation) => dispatch(setUserCurrentLocation(currentLocation)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, params) => dispatch(openModal(modal, params)),
    getDirections: (directions) => dispatch(getDirections(directions)),
})


export default connect(mapStateToProps, mapDispatchToProps)(MapThing)