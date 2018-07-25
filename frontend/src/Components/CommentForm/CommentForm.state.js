import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

import { COMMENT_CREATE_SUCCESS, COMMENT_UPDATE_SUCCESS } from '../../duck/actions/comments'
import { createOrUpdateCommentFetch } from '../../duck/operations/comments'
import CommentFormStateless from './CommentForm'

class CommentForm extends Component {
  state = {
    body: '',
    author: '',
    parentId: null,
    id: null,
    loading: false,
    type: 'new',
  }

  componentWillMount() {
    const { parentId, id } = this.props

    this.setState({
      parentId,
    })

    if (id) {
      const { body, author } = this.props

      this.setState({
        body,
        author,
        id,
        type: 'edit',
      })
    }
  }

  componentWillReceiveProps({ commentStatus }) {
    const prevProps = this.props

    if (prevProps.commentStatus !== commentStatus) {
      if (commentStatus === COMMENT_CREATE_SUCCESS
        || commentStatus === COMMENT_UPDATE_SUCCESS) {
        this.setState({
          body: '',
          author: '',
          id: null,
          loading: false,
        })
        prevProps.onSuccess()
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
    const {
      body,
      author,
      parentId,
      id,
    } = this.state

    this.setState({ loading: true })

    this.props.createOrUpdateComment({
      body,
      author,
      parentId,
      id,
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
  createOrUpdateComment: comment => dispatch(createOrUpdateCommentFetch(comment)),
})

CommentForm.propTypes = {
  parentId: PropTypes.string.isRequired,
  goBackNavigation: PropTypes.func.isRequired,
  createOrUpdateComment: PropTypes.func.isRequired,
  commentStatus: PropTypes.string,
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  onSuccess: PropTypes.func,
}

CommentForm.defaultProps = {
  commentStatus: '',
  id: undefined,
  author: undefined,
  body: undefined,
  onSuccess: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
