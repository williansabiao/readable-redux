import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import postsOperation from '../../duck/operations/posts'
import PostsComponent from './Posts'

class Posts extends Component {
  componentWillMount() {
    const { getPosts } = this.props

    getPosts()
  }

  render() {
    return (
      <div>
        <PostsComponent
          posts={this.props.posts}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.list,
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(postsOperation.getPosts()),
})

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
