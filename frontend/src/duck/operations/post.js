import {
  createPost,
  createPostSuccess,
  createPostFailed,
} from '../actions/post'
import posts from '../../utils/api'

export const createPostFetch = post => (dispatch) => {
  dispatch(createPost())
  console.log(post)
  if (
    post
    && post.title
    && post.category
    && post.body
    && post.author
  ) {
    console.log('oi')
    return posts
      .createPost(post)
      .then(resultPost => dispatch(createPostSuccess(resultPost)))
      .catch(error => createPostFailed(error))
  }
  return false
}

export default {
  createPostFetch,
}
