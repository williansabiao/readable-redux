
import {
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_FAILED,
  COMMENT_CREATE_SUCCESS,
  COMMENT_GET_REQUEST,
  COMMENT_GET_FAILED,
  COMMENT_GET_SUCCESS,
  COMMENT_UPDATE_REQUEST,
  COMMENT_UPDATE_FAILED,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_FAILED,
  COMMENT_DELETE_SUCCESS,
} from '../actions/comments'

const initialState = {
  status: null,
  added: false,
  commentDetails: {
    id: null,
    timestamp: null,
    title: null,
    category: null,
    body: null,
    author: null,
  },
  commentList: [],
  error: {},
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
  case COMMENT_CREATE_REQUEST: {
    return ({
      ...initialState,
      staus: COMMENT_CREATE_REQUEST,
    })
  }
  case COMMENT_CREATE_SUCCESS: {
    const { comment } = action.payload

    if (!(
      comment && comment.id && comment.timestamp
    )) {
      return state
    }

    return {
      ...initialState,
      status: COMMENT_CREATE_SUCCESS,
      added: true,
      commentDetails: comment,
    }
  }
  case COMMENT_CREATE_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: COMMENT_CREATE_FAILED,
      error: errorData,
    }
  }
  case COMMENT_GET_REQUEST: {
    return ({
      ...initialState,
      status: COMMENT_GET_REQUEST,
    })
  }
  case COMMENT_GET_SUCCESS: {
    const { comment, id } = action.payload
    let newState = { ...state }

    if (id) {
      newState = {
        ...state,
        commentDetails: comment,
      }
    } else if (comment.length > 0) {
      newState = {
        ...state,
        commentList: comment,
      }
    }

    return {
      ...newState,
      status: COMMENT_GET_SUCCESS,
    }
  }
  case COMMENT_GET_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: COMMENT_GET_FAILED,
      error: errorData,
    }
  }
  case COMMENT_UPDATE_REQUEST: {
    return ({
      ...initialState,
      status: COMMENT_UPDATE_REQUEST,
    })
  }
  case COMMENT_UPDATE_SUCCESS: {
    const { comment } = action.payload

    if (!(
      comment && comment.id && comment.timestamp
    )) {
      return state
    }

    return {
      ...initialState,
      status: COMMENT_UPDATE_SUCCESS,
      commentDetails: comment,
    }
  }
  case COMMENT_UPDATE_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: COMMENT_UPDATE_FAILED,
      error: errorData,
    }
  }
  case COMMENT_DELETE_REQUEST: {
    return ({
      ...initialState,
      status: COMMENT_DELETE_REQUEST,
    })
  }
  case COMMENT_DELETE_SUCCESS: {
    const { id } = action.payload

    if (!id) {
      return state
    }

    return {
      ...initialState,
      status: COMMENT_DELETE_SUCCESS,
    }
  }
  case COMMENT_DELETE_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: COMMENT_DELETE_FAILED,
      error: errorData,
    }
  }
  default:
    return state
  }
}

export default commentReducer
