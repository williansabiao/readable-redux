import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import FiltersComponent from './Filters'

class Filters extends Component {
  state = {

  }

  render() {
    const { navigateTo, ...rest } = this.props
    return (
      <FiltersComponent
        navigateTo={navigateTo}
        {...rest}
      />
    )
  }
}

// const mapStateToProps = () => ({
// })

const mapDispatchToProps = dispatch => ({
  navigateTo: query => dispatch(push(query)),
})

Filters.propTypes = {
  navigateTo: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Filters)
