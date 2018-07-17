import {
  listPostsRequest,
  listPostsFailed,
  listPostsSuccess,
} from '../actions/posts'

import posts from '../../utils/api'

const getPosts = () => (dispatch) => {
  dispatch(listPostsRequest())
  return posts
    .getPosts()
    .then(resultPost => dispatch(listPostsSuccess(resultPost)))
    .catch(error => dispatch(listPostsFailed(error)))
}

export default {
  getPosts,
}
