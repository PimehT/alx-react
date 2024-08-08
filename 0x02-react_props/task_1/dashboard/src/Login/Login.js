import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <form className='Login-form'>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" autoComplete='email' />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default Login;
