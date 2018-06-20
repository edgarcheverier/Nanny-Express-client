const friendFilter = (state = null, action) => {
  switch (action.type) {
    case 'FILTER_FRIENDS':
        return action.data
    case 'UNFILTER_FRIENDS':
        return null
    default:
      return state
  }
}

export default friendFilter;
