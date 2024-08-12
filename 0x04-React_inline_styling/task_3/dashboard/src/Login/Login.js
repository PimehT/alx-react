import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <form className='Login-form'>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input type="email" name="email" id="email" autoComplete='email' className={css(styles.input)} />
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input type="password" name="password" id="password" className={css(styles.input)} />
        <button type="submit" className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  Login: {
    padding: '1rem 2rem',
    '@media (max-width: 900px)': {
      textOverflow: 'wrap',
    }
  },
  input: {
    margin: '10px 0',
  },
  label: {
    display: 'block',
  },
  button: {
    position: 'relative',
    width: '50px',
    height: '30px',
    display: 'block',
    background: 'none',
    ':hover': {
      border: '1px solid #E02241',
      boxShadow: '0px 0px 2px 2px #E02241'
    },
  },
});

export default Login;
