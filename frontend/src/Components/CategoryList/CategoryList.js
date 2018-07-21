import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './category-list.css'

const defaultClass = 'category-list'

const CategoryList = ({ categories, showAll }) => (
  <div className={defaultClass}>
    {categories.length > 0
      && (
        <ul>
          {showAll && (
            <li>
              <Link to="/">
                All
              </Link>
            </li>
          )}
          {categories.map(category => (
            <li key={category.path}>
              <Link to={`/category/${category.path}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )
    }
    {categories.length < 1 && (
      <p>
        No categories to show
      </p>
    )}
  </div>
)

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  showAll: PropTypes.bool,
}

CategoryList.defaultProps = {
  categories: [],
  showAll: false,
}

export default CategoryList
