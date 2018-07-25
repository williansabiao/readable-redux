import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

import { COMMENT_CREATE_SUCCESS } from '../../duck/actions/comments'
import { createCommentFetch } from '../../duck/operations/comments'
import CommentFormStateless from './CommentForm'

class CommentForm extends Component {
  state = {
    body: '',
    author: '',
    parentId: null,
    id: null,
    loading: false,
  }

  componentWillMount() {
    const { parentId } = this.props

    if (parentId) {
      this.setState({
        parentId,
      })
    }
  }

  componentWillReceiveProps({ commentStatus }) {
    const prevProps = this.props

    if (prevProps.commentStatus !== commentStatus) {
      if (commentStatus === COMMENT_CREATE_SUCCESS) {
        this.setState({
          body: '',
          author: '',
          id: null,
          loading: false,
        })
      }
    }
  }

  handleChange = (name, value) => {
    if (!name || !value) return

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { body, author, parentId } = this.state

    this.setState({ loading: true })
    this.props.createComment({
      body,
      author,
      parentId,
    })
    return false
  }

  render() {
    return (
      <CommentFormStateless
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        {...this.state}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = ({ comments }) => ({
  commentStatus: comments.status,
})

const mapDispatchToProps = dispatch => ({
  goBackNavigation: () => dispatch(goBack()),
  createComment: comment => dispatch(createCommentFetch(comment)),
})

CommentForm.propTypes = {
  parentId: PropTypes.string.isRequired,
  goBackNavigation: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
  commentStatus: PropTypes.string,
}

CommentForm.defaultProps = {
  commentStatus: '',
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
