import {
  // createComment,
  // createCommentSuccess,
  // createCommentFailed,
  getComment,
  getCommentSuccess,
  getCommentFailed,
  // updateComment,
  // updateCommentSuccess,
  // updateCommentFailed,
  // deleteComment,
  // deleteCommentSuccess,
  // deleteCommentFailed,
} from '../actions/comments'

import api from '../../utils/api'

// export const createCommentFetch = comment => (dispatch) => {
//   dispatch(createComment())
//   if (
//     comment
//     && comment.title
//     && comment.category
//     && comment.body
//     && comment.author
//   ) {
//     return comments
//       .createComment(comment)
//       .then(resultComment => dispatch(createCommentSuccess(resultComment)))
//       .catch(error => createCommentFailed(error))
//   }
//   return false
// }

// export const updateCommentFetch = comment => (dispatch) => {
//   dispatch(updateComment())
//   if (
//     comment
//     && comment.id
//     && comment.title
//     && comment.category
//     && comment.body
//     && comment.author
//   ) {
//     return comments
//       .updateComment(comment)
//       .then(resultComment => dispatch(updateCommentSuccess(resultComment)))
//       .catch(error => updateCommentFailed(error))
//   }
//   return false
// }

export const getCommentsFetch = (postId = null) => (dispatch) => {
  dispatch(getComment())

  return api
    .getPostComments(postId)
    .then(resultComment => dispatch(getCommentSuccess(resultComment)))
    .catch(error => getCommentFailed(error))
}

// export const deleteCommentFetch = id => (dispatch) => {
//   dispatch(deleteComment())

//   if (id) {
//     return comments
//       .deleteComment(id)
//       .then(() => dispatch(deleteCommentSuccess(id)))
//       .catch(error => deleteCommentFailed(error))
//   }
//   return false
// }

export default {
  // createCommentFetch,
  getCommentsFetch,
  // updateCommentFetch,
  // deleteCommentFetch,
}
