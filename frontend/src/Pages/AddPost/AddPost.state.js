import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'

import { createPostFetch } from '../../duck/operations/post'
import { fetchGetCategories } from '../../duck/operations/categories'
import { showFeedback as showFeedbackAction } from '../../duck/actions/feedback'
import PostForm from '../../Components/PostForm'

class AddPostPage extends Component {
  componentWillMount() {
    this.props.getCategories()
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
  }

  savePost = (post) => {
    const { addPost, showFeedback } = this.props

    showFeedback({ message: 'Saving post...' })
    addPost(post)
  }

  render() {
    return (
      <PostForm
        submit={this.savePost}
        categories={this.props.categories}
      />
    )
  }
}

const mapStateToProps = ({ post, categories }) => ({
  post,
  categories: categories.list,
})

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(createPostFetch(post)),
  navigateTo: location => dispatch(push(location)),
  showFeedback: ({ message }) => dispatch(showFeedbackAction({ message })),
  getCategories: () => dispatch(fetchGetCategories()),
})

AddPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  showFeedback: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage)
