export const COMMENT_CREATE_REQUEST = 'COMMENT_CREATE_REQUEST'
export const COMMENT_CREATE_FAILED = 'COMMENT_CREATE_FAILED'
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'

export const COMMENT_GET_REQUEST = 'COMMENT_GET_REQUEST'
export const COMMENT_GET_FAILED = 'COMMENT_GET_FAILED'
export const COMMENT_GET_SUCCESS = 'COMMENT_GET_SUCCESS'

export const COMMENT_UPDATE_REQUEST = 'COMMENT_UPDATE_REQUEST'
export const COMMENT_UPDATE_FAILED = 'COMMENT_UPDATE_FAILED'
export const COMMENT_UPDATE_SUCCESS = 'COMMENT_UPDATE_SUCCESS'

export const COMMENT_DELETE_REQUEST = 'COMMENT_DELETE_REQUEST'
export const COMMENT_DELETE_FAILED = 'COMMENT_DELETE_FAILED'
export const COMMENT_DELETE_SUCCESS = 'COMMENT_DELETE_SUCCESS'

export const COMMENT_VOTE_REQUEST = 'COMMENT_VOTE_REQUEST'
export const COMMENT_VOTE_FAILED = 'COMMENT_VOTE_FAILED'
export const COMMENT_VOTE_SUCCESS = 'COMMENT_VOTE_SUCCESS'

export const createComment = () => ({
  type: COMMENT_CREATE_REQUEST,
})

export const createCommentSuccess = comment => ({
  type: COMMENT_CREATE_SUCCESS,
  payload: { comment },
})

export const createCommentFailed = errorData => ({
  type: COMMENT_CREATE_FAILED,
  payload: { errorData },
})

export const getComment = () => ({
  type: COMMENT_GET_REQUEST,
})

export const getCommentSuccess = comment => ({
  type: COMMENT_GET_SUCCESS,
  payload: { comment },
})

export const getCommentFailed = errorData => ({
  type: COMMENT_GET_FAILED,
  payload: { errorData },
})

export const updateComment = () => ({
  type: COMMENT_UPDATE_REQUEST,
})

export const updateCommentSuccess = comment => ({
  type: COMMENT_UPDATE_SUCCESS,
  payload: { comment },
})

export const updateCommentFailed = errorData => ({
  type: COMMENT_UPDATE_FAILED,
  payload: { errorData },
})

export const deleteComment = () => ({
  type: COMMENT_DELETE_REQUEST,
})

export const deleteCommentSuccess = id => ({
  type: COMMENT_DELETE_SUCCESS,
  payload: { id },
})

export const deleteCommentFailed = errorData => ({
  type: COMMENT_DELETE_FAILED,
  payload: { errorData },
})

export const voteComment = () => ({
  type: COMMENT_VOTE_REQUEST,
})

export const voteCommentSuccess = (sum, commentId) => ({
  type: COMMENT_VOTE_SUCCESS,
  payload: { sum, commentId },
})

export const voteCommentFailed = errorData => ({
  type: COMMENT_VOTE_FAILED,
  payload: { errorData },
})

export default {
  createComment,
  createCommentSuccess,
  createCommentFailed,
  getComment,
  getCommentSuccess,
  getCommentFailed,
  updateComment,
  updateCommentSuccess,
  updateCommentFailed,
  deleteComment,
  deleteCommentSuccess,
  deleteCommentFailed,
  voteComment,
  voteCommentSuccess,
  voteCommentFailed,
}
