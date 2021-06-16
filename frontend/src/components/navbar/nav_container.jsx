import { signup, login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Nav from './navbar';
import { closeModal, openModal } from "../../actions/modal_actions";
// import * as NavCss from '../../../public/stylesheets/components/nav_modal.scss';

const mapStateToProps = state => {
  return {
  currentUser: state.session.user,
  session: state.session
  }
};

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
  login: formUser => dispatch(login(formUser)),
  logout: formUser => dispatch(logout(formUser)),
  closeModal: () => dispatch(closeModal()),
  openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);