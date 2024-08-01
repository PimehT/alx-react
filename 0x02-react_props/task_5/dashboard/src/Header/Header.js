import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';


export default function Header () {
  return (
    <div className='App-header'>
      <img
        className='logo'
        src={logo}
        alt='holberton-logo'
      />
      <h1>School dashboard</h1>
    </div>
  )
}
