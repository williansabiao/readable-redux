import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

import CommentFormStateless from './CommentForm'

class CommentForm extends Component {
  state = {
    body: '',
    author: '',
    id: null,
  }

  componentWillMount() {
    const { id } = this.props

    if (id) {
      this.setState({
        id,
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
    e.preventDefault()

    return false
  }

  render() {
    return (
      <CommentFormStateless
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        {...this.state}
        {...this.props}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  goBackNavigation: () => dispatch(goBack()),
})

CommentForm.propTypes = {
  id: PropTypes.string,
  goBackNavigation: PropTypes.func.isRequired,
}

CommentForm.defaultProps = {
  id: undefined,
}

export default connect(null, mapDispatchToProps)(CommentForm)
