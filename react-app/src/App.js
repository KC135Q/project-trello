import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trello from './comp/trello.js';

class App extends Component {
  render() {
    return (
      <div>
        <Trello />

      </div>
    );
  }
}

export default App;
