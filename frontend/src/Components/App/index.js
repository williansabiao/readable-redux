import React, { Component } from 'react';
import Routes from './Routes'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
