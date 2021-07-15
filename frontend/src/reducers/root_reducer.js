import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';
import modalReducer from './modal_reducer';
import errorsReducer from './errors_reducer';
import selectedReducer from './selected_reducer';
import directionsReducer from './directions_reducer';
import businessReducer from './business_reducer';

const RootReducer = combineReducers({
  sessionApi: sessionApiReducer,
  modal: modalReducer,
  errors: errorsReducer,
  selectedFavorites: selectedReducer,
  directions: directionsReducer,
  business: businessReducer
});

export default RootReducer;

