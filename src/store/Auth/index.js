const auth = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_USER':
     return action.data
    default:
      return state
  }
}

export default auth;
