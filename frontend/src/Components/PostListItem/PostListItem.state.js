import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import PostListItemStateless from './PostListItem'

class PostListItem extends Component {
  state = {
    menuIsOpen: false,
  }

  setMenuOpen = value => this.setState({ menuIsOpen: value })

  goToURL = value => () => this.props.navigateTo(value)

  render() {
    const { menuIsOpen } = this.state

    return (
      <PostListItemStateless
        {...this.props}
        menuIsOpen={menuIsOpen}
        goToURL={this.goToURL}
        setMenuOpen={this.setMenuOpen}
      />
    )
  }
}

PostListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  voteCallback: PropTypes.func.isRequired,
  editURL: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  navigateTo: location => dispatch(push(location)),
})

export default connect(null, mapDispatchToProps)(PostListItem)
