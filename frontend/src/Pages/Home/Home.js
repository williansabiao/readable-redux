import React from 'react'
import PropTypes from 'prop-types'

import Posts from '../../Components/Posts'
import CategoryList from '../../Components/CategoryList'

const Home = ({
  match,
}) => (
  <div>
    <CategoryList showAll categorySelected={match.params.category || ''} />
    <Posts category={match.params.category || null} />
  </div>
)

Home.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Home
