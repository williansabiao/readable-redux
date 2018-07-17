import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import postReducer from '../duck/reducers/post'
import postsReducer from '../duck/reducers/posts'
import feedbackReducer from '../duck/reducers/feedback'

export default combineReducers({
  router: routerReducer,
  post: postReducer,
  posts: postsReducer,
  feedback: feedbackReducer,
})
