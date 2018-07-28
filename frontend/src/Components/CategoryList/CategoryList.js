import React from 'react'
import PropTypes from 'prop-types'
import {
  Chip,
  ChipText,
  ChipSet,
} from 'rmwc'

import './category-list.css'

const CategoryList = ({
  categories,
  showAll,
  categorySelected,
  navigateTo,
}) => (
  <React.Fragment>
    {categories.length > 0
      && (
        <ChipSet>
          {showAll && (
            <Chip
              selected={categorySelected === ''}
              className={{ 'chip-selected': categorySelected === '' }}
              onClick={() => navigateTo('/')}
            >
              <ChipText>
                All
              </ChipText>
            </Chip>
          )}
          {categories.map(category => (
            <Chip
              key={category.path}
              selected={categorySelected === category.path}
              className={{ 'chip-selected': categorySelected === category.path }}
              onClick={() => navigateTo(`/${category.path}`)}
            >
              <ChipText>
                {category.name}
              </ChipText>
            </Chip>
          ))}
        </ChipSet>
      )
    }
  </React.Fragment>
)

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  showAll: PropTypes.bool,
  categorySelected: PropTypes.string,
  navigateTo: PropTypes.func.isRequired,
}

CategoryList.defaultProps = {
  categories: [],
  showAll: false,
  categorySelected: 'all',
}

export default CategoryList
