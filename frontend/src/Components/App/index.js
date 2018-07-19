import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Feedback from '../Feedback'
import Routes from './Routes'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    feedback: {
      isOpen: false,
      message: '',
    },
  }

  componentWillReceiveProps({ feedback }) {
    // setTimeout(() => {
    //   this.setState({
    //     feedback: {
    //       isOpen: true,
    //       message: feedback.message,
    //     },
    //   })
    // }, 500)
  }

  render() {
    const { feedback } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React
          </h1>
        </header>
        <div className="App container">
          <Routes />
        </div>
        <Feedback isOpen={feedback.isOpen} message={feedback.message} />
      </div>
    )
  }
}

function mapStateToProps({ feedback }) {
  return {
    feedback,
  }
}

App.propTypes = {
  feedback: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, null)(App)
