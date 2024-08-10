import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles["App-header"])}>
      <img src={logo} alt="Holberton Logo" className={css(styles.img)} />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `.2rem solid #E02241`,
    color: '#E02241',
  },

  img: {
    width: '200px',
    height: '200px',
  },
});

export default Header;
