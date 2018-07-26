import {
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
} from '../actions/comments'

import api from '../../utils/api'

export const createOrUpdateCommentFetch = comment => (dispatch) => {
  dispatch(comment.id ? updateComment() : createComment())
  if (
    comment
    && comment.parentId
    && comment.body
    && comment.author
  ) {
    return api
      .createOrUpdateComment(comment)
      .then(resultComment => dispatch(
        comment.id ? updateCommentSuccess(resultComment) : createCommentSuccess(resultComment),
      ))
      .catch(error => (comment.id ? updateCommentFailed(error) : createCommentFailed(error)))
  }
  return false
}

export const getCommentsFetch = (postId = null) => (dispatch) => {
  dispatch(getComment())

  return api
    .getPostComments(postId)
    .then(resultComment => dispatch(getCommentSuccess(resultComment)))
    .catch(error => getCommentFailed(error))
}

export const deleteCommentFetch = id => (dispatch) => {
  dispatch(deleteComment())

  if (id) {
    return api
      .deleteComment(id)
      .then(() => dispatch(deleteCommentSuccess(id)))
      .catch(error => deleteCommentFailed(error))
  }
  return false
}

export const voteCommentFetch = (sum = -1, commentId = '') => (dispatch) => {
  dispatch(voteComment())

  return api
    .voteComment(sum > 0 ? 'upVote' : 'downVote', commentId)
    .then(() => dispatch(voteCommentSuccess(sum, commentId)))
    .catch(error => voteCommentFailed(error))
}

export default {
  createOrUpdateCommentFetch,
  getCommentsFetch,
  deleteCommentFetch,
  voteCommentFetch,
}
