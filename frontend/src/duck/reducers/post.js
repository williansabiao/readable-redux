
import {
  POST_CREATE_REQUEST,
  POST_CREATE_FAILED,
  POST_CREATE_SUCCESS,
  POST_GET_REQUEST,
  POST_GET_FAILED,
  POST_GET_SUCCESS,
  POST_UPDATE_REQUEST,
  POST_UPDATE_FAILED,
  POST_UPDATE_SUCCESS,
  POST_DELETE_REQUEST,
  POST_DELETE_FAILED,
  POST_DELETE_SUCCESS,
  POST_RESET,
} from '../actions/post'

const initialState = {
  status: null,
  added: false,
  postDetails: {
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
      postDetails: post,
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
  case POST_GET_REQUEST: {
    return ({
      ...initialState,
      status: POST_GET_REQUEST,
    })
  }
  case POST_GET_SUCCESS: {
    const { post } = action.payload

    if (!(
      post && post.id && post.timestamp && post.title && post.category && post.body && post.author
    )) {
      return state
    }

    return {
      ...initialState,
      status: POST_GET_SUCCESS,
      postDetails: post,
    }
  }
  case POST_GET_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: POST_GET_FAILED,
      error: errorData,
    }
  }
  case POST_UPDATE_REQUEST: {
    return ({
      ...initialState,
      status: POST_UPDATE_REQUEST,
    })
  }
  case POST_UPDATE_SUCCESS: {
    const { post } = action.payload

    if (!(
      post && post.id && post.timestamp && post.title && post.category && post.body && post.author
    )) {
      return state
    }

    return {
      ...initialState,
      status: POST_UPDATE_SUCCESS,
      postDetails: post,
    }
  }
  case POST_UPDATE_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: POST_UPDATE_FAILED,
      error: errorData,
    }
  }
  case POST_DELETE_REQUEST: {
    return ({
      ...initialState,
      status: POST_DELETE_REQUEST,
    })
  }
  case POST_DELETE_SUCCESS: {
    const { id } = action.payload

    if (!id) {
      return state
    }

    return {
      ...initialState,
      status: POST_DELETE_SUCCESS,
    }
  }
  case POST_DELETE_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: POST_DELETE_FAILED,
      error: errorData,
    }
  }
  case POST_RESET:
    return initialState
  default:
    return state
  }
}

export default postReducer
