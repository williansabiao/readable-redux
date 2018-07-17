export const POSTS_LIST_REQUEST = 'POSTS_LIST_REQUEST'
export const POSTS_LIST_FAILED = 'POSTS_LIST_FAILED'
export const POSTS_LIST_SUCCESS = 'POSTS_LIST_SUCCESS'

export const listPostsRequest = () => ({
  type: POSTS_LIST_REQUEST,
})

export const listPostsFailed = errorData => ({
  type: POSTS_LIST_FAILED,
  payload: { errorData },
})

export const listPostsSuccess = posts => ({
  type: POSTS_LIST_SUCCESS,
  payload: { posts },
})

export default {
  listPostsRequest,
  listPostsFailed,
  listPostsSuccess,
}
