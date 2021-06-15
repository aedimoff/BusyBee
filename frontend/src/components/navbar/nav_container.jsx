import React from 'react';
import { signup, login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Nav from './navbar';
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
  login: formUser => dispatch(login(formUser)),
  logout: formUser => dispatch(logout(formUser)),
  closeModal: () => dispatch(closeModal()),
  openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);