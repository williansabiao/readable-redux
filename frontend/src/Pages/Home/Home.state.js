import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Posts from '../../Components/Posts'
import CategoryList from '../../Components/CategoryList'

class Home extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <div>
        <CategoryList />
        <Link to="/add-post" className="btn btn-warning" role="button">
          Adicionar um post
        </Link>
        <Posts />
      </div>
    )
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = ({ posts }) => ({
  posts,
})

const mapDispatchToProps = dispatch => ({
  addPost: () => dispatch(getPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
