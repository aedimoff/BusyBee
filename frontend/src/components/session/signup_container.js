import React from 'react';
import { connect } from 'react-redux';
import { signup, removeErrors } from '../../util/session_api_util';
import Signup from './signup';
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
  removeErrors: () => dispatch(removeErrors()),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Log in
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 
