import { combineReducers } from 'redux';

//import individual reducers here
import auth from './Auth'
import user from './User'

export default combineReducers({
  //reducers here
  auth,
  user,
})
