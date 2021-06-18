import { connect } from 'react-redux';
import { addFavorite } from '../../actions/session_actions'
import MapThing from './map'

const mapStateToProps = state => ({
    userId: state?.sessionApi?.user?.id
})

// TODO: Take property off the google response 
const mapDispatchToProps = dispatch => ({
    addFavorite: (property, user_id) => dispatch(addFavorite(property, user_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(MapThing)