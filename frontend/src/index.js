import 'material-components-web/dist/material-components-web.min.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { withRouter } from 'react-router'
import registerServiceWorker from './registerServiceWorker'

import rootReducer from './Reducers/root_reducer'
import App from './Components/App'

const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history),
    ),
  )
)

const NonBlockApp = withRouter(App)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <NonBlockApp />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
