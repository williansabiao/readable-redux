import React, { Component } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import PropTypes from 'prop-types'

import { POST_GET_SUCCESS, POST_GET_FAILED, POST_DELETE_SUCCESS } from '../../duck/actions/post'
import postsOperation from '../../duck/operations/posts'
import { getPostFetch, deletePostFetch } from '../../duck/operations/post'
import PostDetailsComponent from './PostDetails'

class PostDetails extends Component {
  state = {
    loading: true,
  }

  componentWillMount() {
    const { match, replaceTo, getPost } = this.props
    const { id = null } = match.params

    if (id) {
      getPost(id)
    } else {
      replaceTo('/404')
    }
  }

  componentWillReceiveProps({ post }) {
    const prevProps = this.props

    if (post.status !== prevProps.post.status) {
      if (post.status === POST_GET_SUCCESS) {
        this.setState({ loading: false })
      } else if (post.status === POST_GET_FAILED) {
        prevProps.replaceTo('/404')
      }

      if (post.status === POST_DELETE_SUCCESS) {
        prevProps.replaceTo('/')
      }
    }
  }

  onVote = (vote, id) => this.props.votePost(vote, id)

  onDelete = (id) => {
    this.setState({ loading: true })
    this.props.deletePost(id)
  }

  render() {
    const { loading } = this.state
    const { post } = this.props

    return (
      <React.Fragment>
        {loading && 'Loading...'}
        {!loading && (
          <PostDetailsComponent
            onVote={this.onVote}
            onDelete={this.onDelete}
            {...post.postDetails}
          />
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ post }) => ({
  post,
})

const mapDispatchToProps = dispatch => ({
  replaceTo: path => dispatch(replace(path)),
  getPost: id => dispatch(getPostFetch(id)),
  votePost: (vote, id) => dispatch(postsOperation.votePostFetch(vote, id)),
  deletePost: id => dispatch(deletePostFetch(id)),
})

PostDetails.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  replaceTo: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
