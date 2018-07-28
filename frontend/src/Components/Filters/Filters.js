import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
  Grid,
  GridCell,
  Button,
  ButtonIcon,
} from 'rmwc'
import CategoryList from '../CategoryList'

import './filters.css'

const defaultClass = 'filters'

const Filters = ({
  navigateTo,
  ...rest
}) => (
  <Grid className={defaultClass} align="left">
    <GridCell span="1" align="middle">
      <Typography use="overline">
        Filters:
      </Typography>
    </GridCell>
    <GridCell span="4">
      <CategoryList showAll {...rest} />
    </GridCell>
    <GridCell span="4">
      Select
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
  </Grid>
)

Filters.propTypes = {
  navigateTo: PropTypes.func.isRequired,
}

Filters.defaultProps = {
}

export default Filters
