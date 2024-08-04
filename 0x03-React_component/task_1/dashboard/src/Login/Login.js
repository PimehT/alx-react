import React from 'react';
import './Login.css';


export default function Login () {
  return (
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
  )
}
