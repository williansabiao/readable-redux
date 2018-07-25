import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCommentsFetch } from '../../duck/operations/comments'
import CommentListStateless from './CommentList'

class CommentList extends Component {
  state = {
  }

  componentWillMount() {
    if (this.props.parentId) this.props.getComments(this.props.parentId)
  }

  render() {
    const { parentId, commentList } = this.props
    return (
      <CommentListStateless
        parentId={parentId}
        comments={commentList}
      />
    )
  }
}

const mapStateToProps = ({ comments }) => ({
  commentList: comments.commentList,
})

const mapDispatchToProps = dispatch => ({
  getComments: id => dispatch(getCommentsFetch(id)),
})

CommentList.propTypes = {
  getComments: PropTypes.func.isRequired,
  commentList: PropTypes.arrayOf(PropTypes.any).isRequired,
  parentId: PropTypes.string.isRequired,
}

CommentList.defaultProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
