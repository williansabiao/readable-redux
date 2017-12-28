import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to="/add-post" className="btn btn-warning" role="button">Adicionar um post</Link>
    </div>
  )
}
export default Home
