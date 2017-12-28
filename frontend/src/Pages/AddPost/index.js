import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import { createPost } from './../../Actions/post.actions'
import PostForm from '../../Components/PostForm'
import {
  Snackbar,
} from 'rmwc';

class AddPostPage extends Component {
  state = {
    snackbar: {
      isOpen: false,
      message: '',
    },
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.post.added && this.props.post !== nextProps.post.postAdded) {
      // this.setState({
      //   snackbar: {
      //     isOpen: true,
      //     message: 'Post added succesfully'
      //   }
      // })
      this.props.navigateTo('/')
    }
  }

  savePost = (post) => {
    // this.setState({
    //   snackbar: {
    //     isOpen: true,
    //     message: 'Saving post...'
    //   }
    // })
    this.props.addPost(post)
  }

  render() {
    return (
      <div>
        <PostForm submit={this.savePost} />
        <Snackbar
          show={this.state.snackbar.isOpen}
          onClose={evt => this.setState({snackbarIsOpen: false})}
          message={this.state.snackbar.message}
          actionText="OK"
          alignStart
          timeout="2000"
        />
      </div>
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
  }
}

AddPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage)
