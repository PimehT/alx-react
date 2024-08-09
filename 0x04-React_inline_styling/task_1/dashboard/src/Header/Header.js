import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.Header)}>
      <img src={logo} alt="Holberton Logo" className={css(styles.logo)} />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}

const colorPrimary = '#E02241';

const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `.2rem solid ${colorPrimary}`,
  },

  logo: {
    width: '200px',
    height: '200px',
  },

  h1: {
    color: colorPrimary,
  },
});

export default Header;
