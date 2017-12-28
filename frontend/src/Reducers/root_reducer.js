import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { post } from './post.reducers'
import { feedback } from './feedback.reducers'

export default combineReducers({
  router: routerReducer,
  post,
  feedback,
})
