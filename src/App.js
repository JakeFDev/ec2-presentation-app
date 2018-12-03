import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="card">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello there, UMD!</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
