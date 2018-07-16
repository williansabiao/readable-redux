
import {
  POST_CREATE_SUCCESS,
} from '../actions/post'

const initialState = {
  added: false,
  postAdded: {},
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
  case POST_CREATE_SUCCESS: {
    const { post } = action

    if (!(
      post && post.id && post.timestamp && post.title && post.category && post.body && post.author
    )) {
      return state
    }

    return {
      ...state,
      added: true,
      postAdded: post,
    }
  }
  default:
    return state
  }
}

export default postReducer
