import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentItemStateless from './CommentItem'

class CommentItem extends Component {
  state = {
    editComment: false,
  }

  setShowForm = value => this.setState({ editComment: value })

  render() {
    return (
      <CommentItemStateless
        editComment={this.state.editComment}
        setShowForm={this.setShowForm}
        {...this.props}
      />
    )
  }
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
}

export default CommentItem
