import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import postReducer from '../duck/reducers/post'
import postsReducer from '../duck/reducers/posts'
import feedbackReducer from '../duck/reducers/feedback'
import categoriesReducer from '../duck/reducers/categories'
import commentsReducer from '../duck/reducers/comments'

export default combineReducers({
  router: routerReducer,
  post: postReducer,
  posts: postsReducer,
  feedback: feedbackReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
})
