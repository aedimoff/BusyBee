import React from 'react';
import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import Login from './login';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'login',
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  removeErrors: () => dispatch(removeErrors()),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Sign up
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);