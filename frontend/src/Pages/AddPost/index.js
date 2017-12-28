import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import { createPost } from './../../Actions/post.actions'
import PostForm from '../../Components/PostForm'
import { showFeedback } from './../../Actions/feedback.actions'

class AddPostPage extends Component {
  state = {
    snackbar: {
      isOpen: false,
      message: '',
    },
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.post.added && this.props.post !== nextProps.post.postAdded) {
      this.props.showFeedback({ message: 'Post added succesfully' })
      this.props.navigateTo('/')
    }
  }

  savePost = (post) => {
    this.props.showFeedback({ message: 'Saving post...' })
    this.props.addPost(post)
  }

  render() {
    return (
      <PostForm submit={this.savePost} />
    )
  }
}

function mapStateToProps ({ post }) {
  return {
    post,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(createPost(post)),
    navigateTo: (location) => dispatch(push(location)),
    showFeedback: ({message}) => dispatch(showFeedback({message})),
  }
}

AddPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  showFeedback: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage)
