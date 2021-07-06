import { connect } from 'react-redux';
import { addFavorite, setUserCurrentLocation } from '../../actions/session_actions'
import MapThing from './map'

const mapStateToProps = state => ({
    userId: state?.sessionApi?.user?.id,
    currentLocation: state.sessionApi.location,
    favorites: state?.sessionApi?.user?.favorites
})

const mapDispatchToProps = dispatch => ({
    addFavorite: (property, user_id) => dispatch(addFavorite(property, user_id)),
    setUserCurrentLocation: (currentLocation) => dispatch(setUserCurrentLocation(currentLocation))
})


export default connect(mapStateToProps, mapDispatchToProps)(MapThing)