import React from 'react'
import PropTypes from 'prop-types'

import {
  Grid,
  GridCell,
  TextField,
  Select,
  Button,
  Typography,
} from 'rmwc'

const formatCategoriesToSelect = categories => (
  categories.reduce((prev, cat) => (
    { ...prev, [cat.path]: cat.name }
  ), {})
)

const handleChange = (event, cb) => {
  const { target } = event
  const { value } = target
  const name = target.name || target.getAttribute('name')

  cb(name, value)
}

const PostForm = ({ categories, onChange, onSubmit }) => (
  <form name="newPost" onSubmit={onSubmit}>
    <Grid>
      <GridCell span={12} align="middle">
        <Typography use="headline3">
          Add new Post
        </Typography>
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={4}>
        <TextField
          onChange={event => handleChange(event, onChange)}
          name="title"
          id="title"
          label="Title"
          required
          style={{ maxWidth: '100%' }}
          // fullwidth
        />
      </GridCell>
      <GridCell span={4} align="middle">
        <Select
          onChange={event => handleChange(event, onChange)}
          name="category"
          id="category"
          label="Category"
          options={formatCategoriesToSelect(categories)}
          required
          placeholder="Select one category"
        />
      </GridCell>
      <GridCell span={4} align="middle">
        <TextField
          onChange={event => handleChange(event, onChange)}
          name="author"
          id="author"
          label="Author"
          required
        />
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={12}>
        <TextField
          onChange={event => handleChange(event, onChange)}
          name="body"
          textarea
          rows="8"
          id="body"
          label="Text"
          required
          fullwidth
        />
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={12} align="right">
        <Button type="submit" align="right" raised>
          Save
        </Button>
      </GridCell>
    </Grid>
  </form>
)

PostForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.any),
}

PostForm.defaultProps = {
  categories: [],
  onSubmit: () => {},
  onChange: () => {},
}

export default PostForm
