export const API = Symbol('API');

export default baseURL => store => next => action => {
  if (action[API]) {
    const options = {      
      headers: {
        'Content-Type': 'Application/JSON'
      },
      method: action[API].method || 'GET',
    }
    if (options.method == 'POST') {
      options.body = JSON.stringify(store.getState().auth)
    } else if (options.method == 'PUT') {
      options.body = JSON.stringify(store.getState().user)
    }

    fetch(`${baseURL}${action[API].url}`, options)
    .then(res => res.json())
    .then(data => {
      const newAction = ({
        ...action,
        type: action.type + '_SUCCESS',
        data
      })
      delete newAction[API];
      store.dispatch(newAction)
      })
  }
  next(action)
}
