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
  onVote,
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
          <div>
            {`Votes: ${voteScore}`}
            <div onClick={() => onVote(1, id)} role="presentation">
              <i className="material-icons">
                keyboard_arrow_up
              </i>
            </div>
            <div onClick={() => onVote(-1, id)} role="presentation">
              <i className="material-icons">
                keyboard_arrow_down
              </i>
            </div>
          </div>
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
  onVote: PropTypes.func,
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
  onVote: () => false,
}

export default CommentItem
