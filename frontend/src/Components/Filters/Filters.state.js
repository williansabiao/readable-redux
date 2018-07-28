import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import qs from 'query-string'

import FiltersComponent from './Filters'

class Filters extends Component {
  state = {
    orderBy: 'timestamp',
  }

  componentWillMount() {
    const { search } = this.props
    const queryString = qs.parse(search)

    if (queryString.orderBy) this.setState({ orderBy: queryString.orderBy })
  }

  onChange = (fieldName, value) => {
    this.setState({ orderBy: value })
    this.props.navigateTo({ search: `?orderBy=${value}` })
  }

  render() {
    const { navigateTo, ...rest } = this.props
    return (
      <FiltersComponent
        navigateTo={navigateTo}
        onChange={this.onChange}
        orderByValue={this.state.orderBy}
        {...rest}
      />
    )
  }
}

const mapStateToProps = ({ router }) => ({
  search: router.location.search,
})

const mapDispatchToProps = dispatch => ({
  navigateTo: query => dispatch(push(query)),
})

Filters.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
