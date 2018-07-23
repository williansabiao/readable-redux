import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCommentsFetch } from '../../duck/operations/comments'
import CommentListStateless from './CommentList'

class CommentList extends Component {
  state = {
  }

  componentWillMount() {
    console.log('garotoooo', this.props.id, 'lalalalla')
    if (this.props.id) this.props.getComments(this.props.id)
  }

  render() {
    return (
      <CommentListStateless
        comments={this.props.commentList}
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
  id: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
