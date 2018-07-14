import posts from '../utils/api'

export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'

export const createPostSuccess = post => ({
  type: POST_CREATE_SUCCESS,
  post,
})

export const createPost = post => (dispatch) => {
  if (
    post
    && post.title
    && post.category
    && post.body
    && post.author
  ) {
    return posts
      .create(post)
      .then(resultPost => dispatch(createPostSuccess(resultPost)))
  }
  return false
}
