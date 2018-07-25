import uuidv1 from 'uuid/v1'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'

let { token } = localStorage
if (!token) {
  token = Math.random().toString(36).substr(-8)
  localStorage.token = token
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
}

const getPosts = () => (
  fetch(`${API_URL}/posts/`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
)

const getPostComments = id => (
  fetch(`${API_URL}/posts/${id}/comments`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
)

const getPost = (postId = '') => (
  fetch(`${API_URL}/posts/${postId.trim()}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
)

const createPost = (post) => {
  const id = uuidv1()
  const timestamp = (new Date()).getTime()

  return fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...post,
      id,
      timestamp,
    }),
  }).then(res => res.json())
}

const createOrUpdateComment = (comment) => {
  const isEdit = comment.id && comment.id.length > 0
  const id = isEdit ? comment.id : uuidv1()
  const timestamp = (new Date()).getTime()

  return fetch(`${API_URL}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...comment,
      id,
      timestamp,
    }),
  }).then(res => res.json())
}

const updatePost = (post) => {
  const timestamp = (new Date()).getTime()

  return fetch(`${API_URL}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...post,
      timestamp,
    }),
  }).then(res => res.json())
}

const deletePost = id => (
  fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
)

const getCategories = () => (
  fetch(`${API_URL}/categories`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
)

export default {
  createPost,
  getPost,
  getPosts,
  getCategories,
  updatePost,
  deletePost,
  createOrUpdateComment,
  getPostComments,
}
