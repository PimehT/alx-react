import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        {isLoggedIn ? (
          <CourseList />
        ) : (
          <Login />
        )}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
