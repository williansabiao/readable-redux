import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import postReducer from './post.reducers'
import feedbackReducer from './feedback.reducers'

export default combineReducers({
  router: routerReducer,
  postReducer,
  feedbackReducer,
})
