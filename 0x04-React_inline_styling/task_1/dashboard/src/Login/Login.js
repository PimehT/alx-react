import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <form className='Login-form'>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" autoComplete='email' className={css(styles.input)} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" className={css(styles.input)} />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  Login: {
    padding: '4rem 2rem',
  },

  input: {
    margin: '0 10px',
  },
});

export default Login;
