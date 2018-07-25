import React from 'react'
import PropTypes from 'prop-types'

import {
  Grid,
  GridCell,
  TextField,
  Button,
  Typography,
} from 'rmwc'

const handleChange = (event, cb) => {
  const { target } = event
  const { value } = target
  const name = target.name || target.getAttribute('name')

  cb(name, value)
}

const CommentForm = ({
  onChange,
  onSubmit,
  body,
  author,
  onCancel,
  noCancel,
}) => (
  <form name="newPost" onSubmit={onSubmit}>
    <Grid>
      <GridCell span={8} align="middle">
        <Typography use="subtitle1">
          Common, let your comment here
        </Typography>
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={8} align="middle">
        <TextField
          onChange={event => handleChange(event, onChange)}
          name="author"
          id="author"
          label="Author"
          required
          defaultValue={author}
        />
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={8}>
        <TextField
          onChange={event => handleChange(event, onChange)}
          name="body"
          textarea
          rows="2"
          id="body"
          label="Text"
          required
          fullwidth
          defaultValue={body}
        />
      </GridCell>
    </Grid>
    <Grid align="right">
      <GridCell span={5} />
      <GridCell span={2}>
        {!noCancel && (
          <Button onClick={onCancel}>
            Cancel
          </Button>
        )}
      </GridCell>
      <GridCell span={2}>
        <Button type="submit" raised>
          Save
        </Button>
      </GridCell>
    </Grid>
  </form>
)

CommentForm.propTypes = {
  body: PropTypes.string,
  author: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  noCancel: PropTypes.bool,
}

CommentForm.defaultProps = {
  body: '',
  author: '',
  onSubmit: () => {},
  onChange: () => {},
  onCancel: () => {},
  noCancel: false,
}

export default CommentForm
