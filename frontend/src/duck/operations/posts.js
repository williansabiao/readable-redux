import {
  listPostsRequest,
  listPostsFailed,
  listPostsSuccess,
  votePost,
  votePostSuccess,
  votePostFailed,
} from '../actions/posts'

import posts from '../../utils/api'

const getPosts = () => (dispatch) => {
  dispatch(listPostsRequest())
  return posts
    .getPosts()
    .then(resultPost => dispatch(listPostsSuccess(resultPost)))
    .catch(error => dispatch(listPostsFailed(error)))
}

const votePostFetch = (sum = -1, postId = '') => (dispatch) => {
  dispatch(votePost())

  return posts
    .votePost(sum > 0 ? 'upVote' : 'downVote', postId)
    .then(() => dispatch(votePostSuccess(sum, postId)))
    .catch(error => votePostFailed(error))
}

export default {
  getPosts,
  votePostFetch,
}
