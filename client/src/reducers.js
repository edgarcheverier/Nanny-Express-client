

const nannies = (state = [], action) => {
  switch(action.type){
  case 'FETCH_LIST':
  return [...action.list];
  default:
  return state;
  }
}

export default nannies
