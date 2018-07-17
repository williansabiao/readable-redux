export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_FAILED = 'POST_CREATE_FAILED'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'

export const createPost = () => ({
  type: POST_CREATE_REQUEST,
})

export const createPostSuccess = post => ({
  type: POST_CREATE_SUCCESS,
  payload: { post },
})

export const createPostFailed = errorData => ({
  type: POST_CREATE_FAILED,
  payload: { errorData },
})

export default {
  createPost,
  createPostSuccess,
  createPostFailed,
}
