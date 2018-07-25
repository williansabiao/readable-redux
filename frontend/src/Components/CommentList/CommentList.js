import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  // Menu,
  // MenuAnchor,
  // MenuItem,
  Typography,
} from 'rmwc'

import CommentForm from '../CommentForm'
import CommentItem from '../CommentItem'
import './comment-list.css'

// const classRoot = 'comment-list'

const CommentList = ({
  comments,
  parentId,
}) => (
  <React.Fragment>
    <Grid>
      <GridCell span={12}>
        <Typography use="headline4">
          Comments
        </Typography>
      </GridCell>
    </Grid>
    <CommentForm parentId={parentId} noCancel />
    {comments.map(comment => (
      <CommentItem
        key={comment.id}
        {...comment}
      />
    ))}
  </React.Fragment>
)

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.any),
  parentId: PropTypes.string.isRequired,
}

CommentList.defaultProps = {
  comments: [],
}

export default CommentList
