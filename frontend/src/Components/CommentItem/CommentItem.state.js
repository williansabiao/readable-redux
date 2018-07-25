import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentItemStateless from './CommentItem'

class CommentItem extends Component {
  state = {
    editComment: false,
    deleteDialogOpen: false,
  }

  onDelete = id => this.props.onDelete(id)

  setShowForm = value => this.setState({ editComment: value })

  setDeleteDialog = value => this.setState({ deleteDialogOpen: value })

  render() {
    const { deleteDialogOpen, editComment } = this.state

    return (
      <CommentItemStateless
        {...this.props}
        editComment={editComment}
        setShowForm={this.setShowForm}
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialog={this.setDeleteDialog}
        onDelete={this.onDelete} // override what comes from this.props
      />
    )
  }
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default CommentItem
