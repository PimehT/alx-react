import React from 'react';
import logo from './holberton-logo.jpg'
import { getFooterCopy, getFullYear } from './utils';
import './App.css';

function App() {
  return (
    <div>
      <div className='App-header'>
        <img src={logo} alt="Holberton Logo" className='logo' />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
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
    </div>
  );
}

export default App;
