import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

import Posts from '../../Components/Posts'
import CategoryList from '../../Components/CategoryList'

const Home = ({
  match,
}) => (
  <div>
    <CategoryList />
    <Link to="/add-post" className="btn btn-warning" role="button">
      Adicionar um post
    </Link>
    <Posts category={match.params.category || null} />
  </div>
)

Home.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Home
