import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import categoriesOperations from '../../duck/operations/categories'
import CategoryListComponent from './CategoryList'

class CategoryList extends Component {
  componentWillMount() {
    this.props.getCategories()
  }

  render() {
    console.log(this.props.categories.categories)
    return (
      <CategoryListComponent categories={this.props.categories} />
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.list,
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(categoriesOperations.fetchGetCategories()),
})

CategoryList.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
