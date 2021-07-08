import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';
import modalReducer from './modal_reducer';
import errorsReducer from './errors_reducer';
import selectedReducer from './selected_reducer';
import directionsReducer from './directions_reducer';

const RootReducer = combineReducers({
  sessionApi: sessionApiReducer,
  modal: modalReducer,
  errors: errorsReducer,
  selected: selectedReducer,
  directions: directionsReducer,
});

export default RootReducer;

