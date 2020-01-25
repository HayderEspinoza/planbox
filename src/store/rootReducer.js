import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { rootReducer as authentication } from './authentication';
import { rootReducer as initiatives } from './initiatives';

export default combineReducers({
  form,
  authentication,
  initiatives
});
