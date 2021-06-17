import { connect } from 'react-redux';
import { addFavorite } from '../../actions/favorites_actions'
import Map from './map'

const mapStateToProps = state => ({
    userId: state.sessionApi.user.id
})

const mapDispatchToProps = dispatch => ({
    addFavorite: property => dispatch(addFavorite(property))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)