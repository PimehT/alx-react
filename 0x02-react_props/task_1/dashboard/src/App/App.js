import React, { Component } from 'react';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <Notifications />
        <>
          <Header />
          <div className='App-body'>
            <Login />
          </div>
          <Footer />
        </>
      </>
    )
  }
}

export default App
