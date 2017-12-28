import uuidv1 from 'uuid/v1'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const get = (postId = '') => {
  postId = postId.trim()

  return fetch(`${API_URL}/posts/${postId}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  })
    .then((res) => res.json())
}

const create = (post) => {
  const id = uuidv1()
  const timestamp = (new Date()).getTime()

  console.log(id, timestamp, post)
  post.id = id
  post.timestamp = timestamp

  return fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
}

export const posts = {
  get,
  create,
}
