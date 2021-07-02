import { connect } from 'react-redux';
import { addFavorite } from '../../actions/session_actions';
import InfoWindow from './infoWindow';

const mapDispatchToProps = dispatch => ({
  addFavorite: (property, user_id) => dispatch(addFavorite(property, user_id))
})

export default connect(null, mapDispatchToProps)(InfoWindow)