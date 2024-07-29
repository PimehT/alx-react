import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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

  it('renders the Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders the Login component', () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('renders the Footer component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
