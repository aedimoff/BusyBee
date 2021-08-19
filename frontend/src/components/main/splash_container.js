import { connect } from 'react-redux';
import Splash from './splash';
import { openModal } from "../../actions/modal_actions";



const mapDispatchToProps = dispatch => ({
  openModal: (formType) => dispatch(openModal(formType))
})


export default connect(null, mapDispatchToProps)(Splash);