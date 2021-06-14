import React from 'react';
import { connect } from 'react-redux';
import { signup, removeErrors } from '../../util/session_api_util';
import Signup from './signup';
import { openModal, closeModal } from "../../actions/modal_actions";
