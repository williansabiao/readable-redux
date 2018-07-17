
import {
  POST_CREATE_REQUEST,
  POST_CREATE_FAILED,
  POST_CREATE_SUCCESS,
} from '../actions/post'

const initialState = {
  status: null,
  added: false,
  postAdded: {
    id: null,
    timestamp: null,
    title: null,
    category: null,
    body: null,
    author: null,
  },
  error: {},
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
  case POST_CREATE_REQUEST: {
    return ({
      ...initialState,
      staus: POST_CREATE_REQUEST,
    })
  }
  case POST_CREATE_SUCCESS: {
    const { post } = action.payload

    if (!(
      post && post.id && post.timestamp && post.title && post.category && post.body && post.author
    )) {
      return state
    }

    return {
      ...initialState,
      status: POST_CREATE_SUCCESS,
      added: true,
      postAdded: post,
    }
  }
  case POST_CREATE_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: POST_CREATE_FAILED,
      error: errorData,
    }
  }
  default:
    return state
  }
}

export default postReducer
