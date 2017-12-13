import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/add-post" className="btn btn-warning" role="button">Adicionar um post</Link>
      </div>
    )
  }
}
export default Home
