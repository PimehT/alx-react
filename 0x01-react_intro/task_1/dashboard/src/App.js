import React, { Component } from 'react';
import { getFullYear, getFooterCopy } from './utils';

import logo from './logo.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <div className='App-header'>
          <img
            className='logo'
            src={logo}
            alt='holberton-logo'
          />
          <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
          <p>Login to access to the full dashboard</p>
        </div>
        <div className='App-footer'>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </>
    )
  }
}

export default App
