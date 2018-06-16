
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './store/reducers'


let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
