import { connect } from 'react-redux';
import { addFavorite } from '../../actions/session_actions'
import MapThing from './map'
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    userId: state?.sessionApi?.user?.id
})

// TODO: Take property off the google response 
const mapDispatchToProps = dispatch => ({
    addFavorite: (property, user_id) => dispatch(addFavorite(property, user_id)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, params) => dispatch(openModal(modal, params))
})


export default connect(mapStateToProps, mapDispatchToProps)(MapThing)