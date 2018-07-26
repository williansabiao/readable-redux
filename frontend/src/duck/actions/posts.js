export const POSTS_LIST_REQUEST = 'POSTS_LIST_REQUEST'
export const POSTS_LIST_FAILED = 'POSTS_LIST_FAILED'
export const POSTS_LIST_SUCCESS = 'POSTS_LIST_SUCCESS'

export const POST_VOTE_REQUEST = 'POST_VOTE_REQUEST'
export const POST_VOTE_FAILED = 'POST_VOTE_FAILED'
export const POST_VOTE_SUCCESS = 'POST_VOTE_SUCCESS'

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

export const votePost = () => ({
  type: POST_VOTE_REQUEST,
})

export const votePostSuccess = (sum, id) => ({
  type: POST_VOTE_SUCCESS,
  payload: { id, sum },
})

export const votePostFailed = errorData => ({
  type: POST_VOTE_FAILED,
  payload: { errorData },
})


export default {
  listPostsRequest,
  listPostsFailed,
  listPostsSuccess,
  votePost,
  votePostSuccess,
  votePostFailed,
}
