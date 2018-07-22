import {
  createPost,
  createPostSuccess,
  createPostFailed,
  getPost,
  getPostSuccess,
  getPostFailed,
  updatePost,
  updatePostSuccess,
  updatePostFailed,
  deletePost,
  deletePostSuccess,
  deletePostFailed,
} from '../actions/post'

import posts from '../../utils/api'

export const createPostFetch = post => (dispatch) => {
  dispatch(createPost())
  if (
    post
    && post.title
    && post.category
    && post.body
    && post.author
  ) {
    return posts
      .createPost(post)
      .then(resultPost => dispatch(createPostSuccess(resultPost)))
      .catch(error => createPostFailed(error))
  }
  return false
}

export const updatePostFetch = post => (dispatch) => {
  dispatch(updatePost())
  if (
    post
    && post.id
    && post.title
    && post.category
    && post.body
    && post.author
  ) {
    return posts
      .updatePost(post)
      .then(resultPost => dispatch(updatePostSuccess(resultPost)))
      .catch(error => updatePostFailed(error))
  }
  return false
}

export const getPostFetch = id => (dispatch) => {
  dispatch(getPost())

  if (id) {
    return posts
      .getPost(id)
      .then(resultPost => dispatch(getPostSuccess(resultPost)))
      .catch(error => getPostFailed(error))
  }
  return false
}

export const deletePostFetch = id => (dispatch) => {
  dispatch(deletePost())

  if (id) {
    return posts
      .deletePost(id)
      .then(() => dispatch(deletePostSuccess(id)))
      .catch(error => deletePostFailed(error))
  }
  return false
}

export default {
  createPostFetch,
  getPostFetch,
  updatePostFetch,
  deletePostFetch,
}
