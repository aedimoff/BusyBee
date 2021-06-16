import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionApiReducer from './session_api_reducer';
import modalReducer from './modal_reducer';
import errorsReducer from './errors_reducer'

const RootReducer = combineReducers({
  session: sessionReducer,
  sessionApi: sessionApiReducer,
  modal: modalReducer,
  errors: errorsReducer
});

export default RootReducer;

