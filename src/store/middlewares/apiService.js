export const API = Symbol('API');

export default baseURL => store => next => action => {
  if (action[API]) {
    console.log('sended');
    // const body = JSON.stringify({name:'banano'})
    console.log(store.getState().auth);
    fetch(`${baseURL}${action[API].url}`, {
      headers: {
        'Content-Type': 'Application/JSON'
      },
      method: action[API].method || 'GET',
      body: JSON.stringify(store.getState().auth)
    })
    .then(res => res.json())
    .then(data => {
      console.log('mango:', data);  
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
