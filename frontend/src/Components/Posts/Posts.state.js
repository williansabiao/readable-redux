import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import postsOperation from '../../duck/operations/posts'
import { POSTS_LIST_SUCCESS } from '../../duck/actions/posts'
import PostsComponent from './Posts'

class Posts extends Component {
  state = {
    posts: [],
  }

  componentWillMount() {
    const { getPosts } = this.props

    getPosts()
  }

  componentWillReceiveProps({ category, postsStatus, posts }) {
    const prevProps = this.props
    if (postsStatus !== prevProps.postsStatus) {
      let allPosts = []
      if (postsStatus === POSTS_LIST_SUCCESS) allPosts = [...posts]
      if (category) allPosts = this.filterPosts(allPosts, category)

      this.setState({ posts: allPosts })
    }

    if (category !== prevProps.category) {
      this.setState({ posts: this.filterPosts(posts, category) })
    }
  }

  filterPosts = (posts = [], category = '') => console.log(posts, category) || posts.filter(post => post.category === category)

  render() {
    return (
      <PostsComponent
        posts={this.state.posts}
      />
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.list,
  postsStatus: posts.status || '',
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(postsOperation.getPosts()),
})

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
  category: PropTypes.string,
  postsStatus: PropTypes.string.isRequired,
}

Posts.defaultProps = {
  category: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
