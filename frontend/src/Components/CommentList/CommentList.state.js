import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCommentsFetch, deleteCommentFetch } from '../../duck/operations/comments'
import CommentListStateless from './CommentList'

class CommentList extends Component {
  state = {
  }

  componentWillMount() {
    if (this.props.parentId) this.props.getComments(this.props.parentId)
  }

  onDelete = id => this.props.deleteComment(id)

  removeDeletedComments = comments => comments.filter(comment => !comment.deleted)

  render() {
    const { parentId, commentList } = this.props
    return (
      <CommentListStateless
        parentId={parentId}
        comments={this.removeDeletedComments(commentList)}
        onDelete={this.onDelete}
      />
    )
  }
}

const mapStateToProps = ({ comments }) => ({
  commentList: comments.commentList,
})

const mapDispatchToProps = dispatch => ({
  getComments: id => dispatch(getCommentsFetch(id)),
  deleteComment: id => dispatch(deleteCommentFetch(id)),
})

CommentList.propTypes = {
  getComments: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  commentList: PropTypes.arrayOf(PropTypes.any).isRequired,
  parentId: PropTypes.string.isRequired,
}

CommentList.defaultProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
