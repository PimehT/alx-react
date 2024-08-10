import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;


    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <>
        <div className={css(appStyle.App)}>
          <div className="heading-section">
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repellat temporibus, nemo necessitatibus accusantium a eligendi sed esse aperiam ea nam aliquid debitis facere voluptate explicabo eum, voluptates iusto corporis.</p>
          </BodySection>
          <div className={css(appStyle.appFooter)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

// const colorPrimary = '#E02241';
// const colorUrgent = '#FF0000';
// const colorDefault = '#01017e';
// const colorGrey = '#999999';
// const fontFamily = 'Arial, Helvetica, sans-serif';

const appStyle = StyleSheet.create({
  App: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'relative',
    margin: '0',
    padding: '0.1rem',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  appFooter: {
    borderTop: '.2rem solid #E02241',
    paddingTop: '1rem',
    textAlign: 'center',
    fontStyle: 'italic',
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
