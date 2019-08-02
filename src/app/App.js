import React, { Component } from 'react';
import Game from '../game/Game';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ReactND - Coding Practice</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
