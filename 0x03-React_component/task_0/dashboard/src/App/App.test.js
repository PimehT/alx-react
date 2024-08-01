import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the Notifications component', () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('does not display the CourseList component by default', () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe('when isLoggedIn is true', () => {
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not include the Login component', () => {
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('includes the CourseList component', () => {
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });
});
