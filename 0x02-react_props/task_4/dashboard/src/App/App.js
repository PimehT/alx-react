import React from 'react';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

import './App.css';


export default function App ({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
