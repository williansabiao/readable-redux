import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import postReducer from '../duck/reducers/post'
import feedbackReducer from '../duck/reducers/feedback'

export default combineReducers({
  router: routerReducer,
  post: postReducer,
  feedback: feedbackReducer,
})
