
import {
  POST_CREATE_SUCCESS,
} from './../Actions/post.actions'

const initialState = {
  added: false,
  postAdded: {}
}

export function post (state = initialState, action) {
  switch (action.type) {
    case POST_CREATE_SUCCESS :
      let { post } = action

      if(post && post.id && post.timestamp && post.title && post.category && post.body && post.author) {
        state.added = true
        state.postAdded = post
      }

      return {
        ...state,
      }
    default :
      return state
  }
}
