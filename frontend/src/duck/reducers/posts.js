import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILED,
  POST_VOTE_REQUEST,
  POST_VOTE_FAILED,
  POST_VOTE_SUCCESS,
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
  case POST_VOTE_REQUEST: {
    return ({
      ...state,
      status: POST_VOTE_REQUEST,
    })
  }
  case POST_VOTE_SUCCESS: {
    const { sum, id } = action.payload
    const posts = [...state.list]

    if (!id || !sum) {
      return state
    }

    const index = posts.findIndex(commentItem => commentItem.id === id)
    posts[index].voteScore += sum

    return {
      ...state,
      status: POST_VOTE_SUCCESS,
      list: posts,
    }
  }
  case POST_VOTE_FAILED: {
    const { errorData } = action.payload

    return {
      ...state,
      status: POST_VOTE_FAILED,
      error: errorData,
    }
  }
  default:
    return state
  }
}

export default postsReducer
