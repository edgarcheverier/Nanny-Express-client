import { combineReducers } from 'redux';

//import individual reducers here
import auth from './Auth'
import user from './User'
import friendFilter from './FriendFilter'

export default combineReducers({
  //reducers here
  friendFilter,
  auth,
  user,
})
