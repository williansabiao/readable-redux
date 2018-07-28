import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
  Grid,
  GridCell,
  Button,
  ButtonIcon,
  Select,
} from 'rmwc'
import CategoryList from '../CategoryList'

import './filters.css'

const defaultClass = 'filters'

const handleChange = (event, cb) => {
  const { target } = event
  const { value } = target
  const name = target.name || target.getAttribute('name')

  cb(name, value)
}

const Filters = ({
  navigateTo,
  orderByValue,
  onChange,
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
    <GridCell span="4" align="top">
      <Select
        onChange={event => handleChange(event, onChange)}
        name="orderBy"
        id="orderBy"
        label="Order by"
        options={{ timestamp: 'Date', voteScore: 'Score' }}
        value={orderByValue}
      />
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
  orderByValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

Filters.defaultProps = {
  orderByValue: 'timestamp',
}

export default Filters
