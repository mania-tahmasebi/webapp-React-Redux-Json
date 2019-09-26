import { combineReducers } from 'redux'
import user from './reducers/user'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user,
  form: formReducer
})
