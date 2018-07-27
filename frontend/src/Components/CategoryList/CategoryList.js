import React from 'react'
import PropTypes from 'prop-types'
import {
  Chip,
  ChipText,
  ChipSet,
  Typography,
  Grid,
  GridCell,
  Button,
  ButtonIcon,
} from 'rmwc'

import './category-list.css'

const defaultClass = 'category-list'

const CategoryList = ({
  categories,
  showAll,
  categorySelected,
  navigateTo,
}) => (
  <Grid className={defaultClass} align="left">
    <GridCell span="1" align="middle">
      <Typography use="overline">
        Filter:
      </Typography>
    </GridCell>
    <GridCell span="8">
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
    </GridCell>
    <GridCell span="3" align="middle">
      <Button
        className="add-new-post-btn"
        theme="secondary"
        accent
        onClick={() => navigateTo('/add-post')}
      >
        <ButtonIcon use="add_circle_outline" />
        Add new post
      </Button>
    </GridCell>
    {/* {categories.length < 1 && (
      <p>
        No categories to show
      </p>
    )} */}
  </Grid>
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
