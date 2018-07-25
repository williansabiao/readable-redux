import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  Button,
  SimpleDialog,
} from 'rmwc'

import { formatToComments } from '../../utils/date'
import CommentForm from '../CommentForm'
import './comment-item.css'

// const classRoot = 'comment-list'

const CommentItem = ({
  editComment,
  setShowForm,
  id,
  author,
  voteScore,
  timestamp,
  body,
  parentId,
  onDelete,
  deleteDialogOpen,
  setDeleteDialog,
}) => (
  <React.Fragment>
    {!editComment && (
      <Grid>
        <GridCell span={12} align="left">
          <p>
            {`@${author} - ${formatToComments(timestamp)}`}
          </p>
          <p>
            {body}
          </p>
          <p>
            {`Votes: ${voteScore}`}
          </p>
          <Button onClick={() => setShowForm(!editComment)} ripple={false}>
            Edit
          </Button>
          <Button onClick={() => setDeleteDialog(true)} raised theme="secondary-bg on-secondary">
            Delete
          </Button>
        </GridCell>
      </Grid>
    )}
    {editComment && (
      <CommentForm
        id={id}
        parentId={parentId}
        author={author}
        voteScore={voteScore}
        timestamp={timestamp}
        body={body}
        onCancel={() => setShowForm(false)}
        onSuccess={() => setShowForm(false)}
      />
    )}
    <SimpleDialog
      title="Delete comment"
      body="Are you sure do you want delete this comment?"
      open={deleteDialogOpen}
      onClose={() => setDeleteDialog(false)}
      onAccept={() => onDelete(id)}
      onCancel={() => setDeleteDialog(false)}
    />
  </React.Fragment>
)

CommentItem.propTypes = {
  editComment: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
  id: PropTypes.string,
  parentId: PropTypes.string,
  author: PropTypes.string,
  voteScore: PropTypes.number,
  timestamp: PropTypes.number,
  body: PropTypes.string,
  onDelete: PropTypes.func,
  deleteDialogOpen: PropTypes.bool,
  setDeleteDialog: PropTypes.func,
}

CommentItem.defaultProps = {
  id: '',
  parentId: '',
  author: '',
  voteScore: null,
  timestamp: null,
  body: '',
  onDelete: () => false,
  deleteDialogOpen: false,
  setDeleteDialog: () => false,
}

export default CommentItem
