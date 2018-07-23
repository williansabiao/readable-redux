import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  // Menu,
  // MenuAnchor,
  // MenuItem,
  // Typography,
} from 'rmwc'

import './comment-list.css'

// const classRoot = 'comment-list'

const CommentList = ({
  comments,
}) => (
  <Grid>
    <GridCell span={12} align="left">
      <pre>
        {JSON.stringify(comments)}
      </pre>
    </GridCell>
  </Grid>
)

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.any),
}

CommentList.defaultProps = {
  comments: [],
}

export default CommentList
