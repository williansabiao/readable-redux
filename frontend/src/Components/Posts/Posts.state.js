import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import qs from 'query-string'

import postsOperation from '../../duck/operations/posts'
import { deletePostFetch } from '../../duck/operations/post'
import { POST_DELETE_SUCCESS } from '../../duck/actions/post'
import PostsComponent from './Posts'

class Posts extends Component {
  state = {
    posts: [],
  }

  componentWillMount() {
    const { getPosts } = this.props

    getPosts()
  }

  componentWillReceiveProps({
    category, postsStatus, posts, post,
  }) {
    const prevProps = this.props

    // if (orderBy !== prevProps.orderBy) this.setOrderBy()

    if (postsStatus !== prevProps.postsStatus) {
      let allPosts = [...posts]
      if (category) allPosts = this.filterPosts(allPosts, category)

      this.setState({ posts: allPosts })
    }

    if (category !== prevProps.category) {
      this.setState({ posts: this.filterPosts(posts, category) })
    }

    if (post.status !== prevProps.post.status) {
      if (post.status === POST_DELETE_SUCCESS) {
        prevProps.getPosts()
      }
    }
  }

  onDelete = id => () => this.props.deletePost(id)

  onVote = (vote, id) => this.props.votePost(vote, id)

  sortPosts = (posts) => {
    const { orderBy = 'timestamp' } = this.props

    return posts.sort((p1, p2) => p1[orderBy] < p2[orderBy])
  }

  filterPosts = (posts = [], category = '') => (
    category && category.length > 0 ? posts.filter(post => post.category === category) : posts
  )

  render() {
    return (
      <PostsComponent
        posts={this.sortPosts(this.state.posts)}
        onDelete={this.onDelete}
        onVote={this.onVote}
      />
    )
  }
}

const mapStateToProps = ({ posts, post, router }) => ({
  posts: posts.list,
  postsStatus: posts.status || '',
  post,
  orderBy: qs.parse(router.location.search).orderBy || 'timestamp',
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(postsOperation.getPosts()),
  votePost: (vote, id) => dispatch(postsOperation.votePostFetch(vote, id)),
  deletePost: id => dispatch(deletePostFetch(id)),
})

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  category: PropTypes.string,
  postsStatus: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
}

Posts.defaultProps = {
  category: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
