import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App'
import reducers from './store/reducers'
import apiService from './store/middlewares/apiService'
import { SERVER_URL } from './config/api.config'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

let store = createStore(
  reducers,
  applyMiddleware(apiService(SERVER_URL))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
