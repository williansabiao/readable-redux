import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import { createPostFetch } from '../../duck/operations/post'
import PostForm from '../../Components/PostForm'
import { showFeedback as showFeedbackAction } from '../../duck/actions/feedback'

class AddPostPage extends Component {
  componentWillReceiveProps(nextProps) {
    const { post, showFeedback, navigateTo } = this.props
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
      <PostForm submit={this.savePost} />
    )
  }
}

const mapStateToProps = ({ post }) => ({
  post,
})

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(createPostFetch(post)),
  navigateTo: location => dispatch(push(location)),
  showFeedback: ({ message }) => dispatch(showFeedbackAction({ message })),
})

AddPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  showFeedback: PropTypes.func.isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage)
