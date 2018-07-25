import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  Button,
} from 'rmwc'

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
}) => (
  <React.Fragment>
    {!editComment && (
      <Grid>
        <GridCell span={12} align="left">
          <p>
            {`@${author} - ${timestamp}`}
          </p>
          <p>
            {body}
          </p>
          <p>
            {`Votes: ${voteScore}`}
          </p>
          <Button onClick={() => setShowForm(!editComment)}>
            Toggle form
          </Button>
        </GridCell>
      </Grid>
    )}
    {editComment && (
      <CommentForm
        id={id}
        author={author}
        voteScore={voteScore}
        timestamp={timestamp}
        body={body}
        onCancel={() => setShowForm(false)}
      />
    )}
  </React.Fragment>
)

CommentItem.propTypes = {
  editComment: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
  id: PropTypes.string,
  author: PropTypes.string,
  voteScore: PropTypes.number,
  timestamp: PropTypes.number,
  body: PropTypes.string,
}

CommentItem.defaultProps = {
  id: '',
  author: '',
  voteScore: null,
  timestamp: null,
  body: '',
}

export default CommentItem
