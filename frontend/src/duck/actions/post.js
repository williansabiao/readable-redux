export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_FAILED = 'POST_CREATE_FAILED'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'

export const POST_GET_REQUEST = 'POST_GET_REQUEST'
export const POST_GET_FAILED = 'POST_GET_FAILED'
export const POST_GET_SUCCESS = 'POST_GET_SUCCESS'

export const POST_UPDATE_REQUEST = 'POST_UPDATE_REQUEST'
export const POST_UPDATE_FAILED = 'POST_UPDATE_FAILED'
export const POST_UPDATE_SUCCESS = 'POST_UPDATE_SUCCESS'

export const POST_DELETE_REQUEST = 'POST_DELETE_REQUEST'
export const POST_DELETE_FAILED = 'POST_DELETE_FAILED'
export const POST_DELETE_SUCCESS = 'POST_DELETE_SUCCESS'

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

export const getPost = () => ({
  type: POST_GET_REQUEST,
})

export const getPostSuccess = post => ({
  type: POST_GET_SUCCESS,
  payload: { post },
})

export const getPostFailed = errorData => ({
  type: POST_GET_FAILED,
  payload: { errorData },
})

export const updatePost = () => ({
  type: POST_UPDATE_REQUEST,
})

export const updatePostSuccess = post => ({
  type: POST_UPDATE_SUCCESS,
  payload: { post },
})

export const updatePostFailed = errorData => ({
  type: POST_UPDATE_FAILED,
  payload: { errorData },
})

export const deletePost = () => ({
  type: POST_DELETE_REQUEST,
})

export const deletePostSuccess = id => ({
  type: POST_DELETE_SUCCESS,
  payload: { id },
})

export const deletePostFailed = errorData => ({
  type: POST_DELETE_FAILED,
  payload: { errorData },
})

export default {
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
}
