import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import postsOperation from '../../duck/operations/posts'
import PostsComponent from './Posts'

class Posts extends Component {
  state = {
    posts: [],
  }

  componentWillMount() {
    const { getPosts } = this.props

    getPosts()
  }

  componentWillReceiveProps({ posts }) {
    const prevProps = this.props
    if (posts.status !== prevProps.status) {
      if (posts.list.length > 0) this.setState({ posts: posts.list })
    }
  }

  render() {
    return (
      <div>
        <PostsComponent
          posts={this.state.posts}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts,
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(postsOperation.getPosts()),
})

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
