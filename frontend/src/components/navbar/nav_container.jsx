import { signup, login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { closeModal, openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';
// import * as NavCss from '../../../public/stylesheets/components/nav_modal.scss';

const mapStateToProps = state => {
  return {
  user: state.sessionApi.user,
  session: state.sessionApi,
  loggedin: state.sessionApi.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
  login: formUser => dispatch(login(formUser)),
  logout: formUser => dispatch(logout(formUser)),
  closeModal: () => dispatch(closeModal()),
  openModal: (formType) => dispatch(openModal(formType))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));