import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILED,
} from '../actions/posts'

const initialState = {
  status: null,
  list: [],
  error: {},
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
  case POSTS_LIST_REQUEST: {
    return {
      ...initialState,
      status: POSTS_LIST_REQUEST,
    }
  }
  case POSTS_LIST_SUCCESS: {
    const { posts } = action.payload

    if (!posts) {
      return state
    }

    return {
      ...initialState,
      status: POSTS_LIST_SUCCESS,
      list: posts,
    }
  }
  case POSTS_LIST_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: POSTS_LIST_FAILED,
      error: errorData,
    }
  }
  default:
    return state
  }
}

export default postsReducer
