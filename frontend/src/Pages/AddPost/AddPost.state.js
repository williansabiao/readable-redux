import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'

import { createPostFetch, getPostFetch, updatePostFetch } from '../../duck/operations/post'
import { fetchGetCategories } from '../../duck/operations/categories'
import { showFeedback as showFeedbackAction } from '../../duck/actions/feedback'
import { POST_UPDATE_SUCCESS, POST_GET_SUCCESS } from '../../duck/actions/post'
import PostForm from '../../Components/PostForm'

class AddPostPage extends Component {
  state = {
    loading: true,
    type: 'add',
    id: null,
  }

  componentWillMount() {
    const { getPost, match, getCategories } = this.props
    const { id = null } = match.params

    getCategories()

    if (id) {
      getPost(id)
      this.setState({ type: 'edit', id })
    } else {
      this.setState({ loading: false })
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      post,
      showFeedback,
      navigateTo,
    } = this.props

    if (nextProps.post.added && post !== nextProps.post.postAdded) {
      showFeedback({ message: 'Post added succesfully' })
      navigateTo('/')
    }

    if (post.status !== nextProps.post.status) {
      if (nextProps.post.status === POST_GET_SUCCESS) {
        this.setState({ loading: false })
      }
      if (nextProps.post.status === POST_UPDATE_SUCCESS) {
        showFeedback({ message: 'Post edited succesfully' })
        navigateTo('/')
      }
    }
  }

  savePost = (post) => {
    const { addPost, showFeedback, updatePost } = this.props
    const { type, id } = this.state

    showFeedback({ message: 'Saving post...' })
    if (type === 'edit') {
      updatePost({
        ...post,
        id,
      })
    } else {
      addPost(post)
    }
  }

  render() {
    const { loading, type } = this.state
    const { post } = this.props

    return (
      <React.Fragment>
        {loading && 'Loading...'}
        {!loading && (
          <PostForm
            submit={this.savePost}
            categories={this.props.categories}
            post={type === 'edit' ? post.postDetails : null}
          />)
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ post, categories }) => ({
  post,
  categories: categories.list,
})

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(createPostFetch(post)),
  getPost: id => dispatch(getPostFetch(id)),
  updatePost: post => dispatch(updatePostFetch(post)),
  navigateTo: location => dispatch(push(location)),
  showFeedback: ({ message }) => dispatch(showFeedbackAction({ message })),
  getCategories: () => dispatch(fetchGetCategories()),
})

AddPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  showFeedback: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage)
