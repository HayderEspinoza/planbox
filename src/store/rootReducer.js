import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { rootReducer as authentication } from './authentication';

export default combineReducers({
  form,
  authentication
});
