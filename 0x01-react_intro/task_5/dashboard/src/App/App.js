import React, { Component } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

import logo from '../assets/logo.jpg';
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
          <form className='Login-form'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button type="submit">OK</button>
          </form>
        </div>
        <div className='App-footer'>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </>
    )
  }
}

export default App
