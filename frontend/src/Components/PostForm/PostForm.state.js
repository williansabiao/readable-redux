import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PostFormStateless from './PostForm'

class PostForm extends Component {
  state = {
    title: null,
    category: null,
    body: null,
    author: null,
  }

  handleChange = (name, value) => {
    if (!name || !value) return

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    const { submit } = this.props
    e.preventDefault()

    submit(this.state)
    return false
  }

  render() {
    return (
      <PostFormStateless
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        categories={this.props.categories}
      />
    )
  }
}

PostForm.propTypes = {
  submit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.any),
}

PostForm.defaultProps = {
  categories: [],
}

export default PostForm
