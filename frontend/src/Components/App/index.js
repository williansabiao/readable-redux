import React, { Component } from 'react'
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  // TopAppBarNavigationIcon,
  // TopAppBarActionItem,
  TopAppBarTitle,
} from 'rmwc/TopAppBar'

import { Link } from 'react-router-dom'

import Feedback from '../Feedback'
import Routes from './Routes'

import './App.css'

class App extends Component {
  state = {
    feedback: {
      isOpen: false,
      message: '',
    },
  }

  render() {
    const { feedback } = this.state

    return (
      <div className="App">
        <div className="App__header">
          <TopAppBar>
            <TopAppBarRow>
              <TopAppBarSection alignStart>
                {/* <TopAppBarNavigationIcon use="menu" /> */}
                <TopAppBarTitle>
                  <Link to="/" className="App__header-title">
                    Readable Redux App
                  </Link>
                </TopAppBarTitle>
              </TopAppBarSection>
            </TopAppBarRow>
          </TopAppBar>
        </div>
        <div className="App container">
          <Routes />
        </div>
        <Feedback isOpen={feedback.isOpen} message={feedback.message} />
      </div>
    )
  }
}


export default App
