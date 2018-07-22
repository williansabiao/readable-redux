import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

import PostFormStateless from './PostForm'

class PostForm extends Component {
  state = {
    title: '',
    category: '',
    body: '',
    author: '',
    type: 'new',
  }

  componentWillMount() {
    const { post } = this.props

    if (post) {
      this.setState({
        title: post.title,
        category: post.category,
        body: post.body,
        author: post.author,
        type: 'edit',
      })
    }
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
    const { goBackNavigation, categories } = this.props

    return (
      <PostFormStateless
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        categories={categories}
        onCancel={goBackNavigation}
        {...this.state}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  goBackNavigation: () => dispatch(goBack()),
})

PostForm.propTypes = {
  submit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.any),
  post: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.bool,
  ]),
  goBackNavigation: PropTypes.func.isRequired,
}

PostForm.defaultProps = {
  categories: [],
  post: false,
}

export default connect(null, mapDispatchToProps)(PostForm)
