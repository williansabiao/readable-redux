import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { withRouter } from 'react-router'
import { ThemeProvider } from 'rmwc/Theme'

import '../node_modules/material-components-web/dist/material-components-web.min.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './Reducers/root_reducer'
import App from './Components/App'

const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      logger,
    ),
  ),
)

const NonBlockApp = withRouter(App)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider options={{
        primary: '#303030',
        secondary: '#661fff',
        background: '#fff',
        surface: '#fff',
        onPrimary: '#fff',
        onSecondary: '#fff',
        onSurface: '#000',
        textPrimaryOnBackground: 'rgba(0, 0, 0, 0.87)',
        textSecondaryOnBackground: 'rgba(0, 0, 0, 0.54)',
        textHintOnBackground: 'rgba(0, 0, 0, 0.38)',
        textDisabledOnBackground: 'rgba(0, 0, 0, 0.38)',
        textIconOnBackground: 'rgba(0, 0, 0, 0.38)',
        textPrimaryOnLight: 'rgba(0, 0, 0, 0.87)',
        textSecondaryOnLight: 'rgba(0, 0, 0, 0.54)',
        textHintOnLight: 'rgba(0, 0, 0, 0.38)',
        textDisabledOnLight: 'rgba(0, 0, 0, 0.38)',
        textIconOnLight: 'rgba(0, 0, 0, 0.38)',
        textPrimaryOnDark: 'white',
        textSecondaryOnDark: 'rgba(255, 255, 255, 0.7)',
        textHintOnDark: 'rgba(255, 255, 255, 0.5)',
        textDisabledOnDark: 'rgba(255, 255, 255, 0.5)',
        textIconOnDark: 'rgba(255, 255, 255, 0.5)',
      }}
      >
        <NonBlockApp />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
