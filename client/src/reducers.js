import { combineReducers } from 'redux'

const nannies = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_LIST':
    return [...action.list]
  default:
    return state
  }
}

const user = (state =[], action) => {
  switch (action.type) {
  case 'FETCH_USER':
    return [...action.user]
  default:
    return state
  }
}


export default combineReducers({
  nannies,
  user
})
