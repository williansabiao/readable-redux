import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { fetchGetCategories } from '../../duck/operations/categories'
import CategoryListComponent from './CategoryList'

class CategoryList extends Component {
  componentWillMount() {
    this.props.getCategories()
  }

  render() {
    const { categories, navigateTo, ...rest } = this.props
    return (
      <CategoryListComponent
        categories={categories}
        navigateTo={navigateTo}
        {...rest}
      />
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.list,
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchGetCategories()),
  navigateTo: query => dispatch(push(query)),
})

CategoryList.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigateTo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
