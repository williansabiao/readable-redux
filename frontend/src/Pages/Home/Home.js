import React from 'react'
import { Link } from 'react-router-dom'
import Posts from '../../Components/Posts'
import CategoryList from '../../Components/CategoryList'

const Home = () => (
  <div>
    <CategoryList />
    <Link to="/add-post" className="btn btn-warning" role="button">
      Adicionar um post
    </Link>
    <Posts />
  </div>
)

export default Home
