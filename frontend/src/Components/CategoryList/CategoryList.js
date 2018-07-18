import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './category-list.css'

const defaultClass = 'category-list'

const CategoryList = ({ categories }) => (
  <div className={defaultClass}>
    {categories.length > 0
      && (
        <ul>
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
}

CategoryList.defaultProps = {
  categories: [],
}

export default CategoryList
