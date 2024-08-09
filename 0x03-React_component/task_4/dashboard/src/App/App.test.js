import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('does not render CourseList on default', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  })
});

describe('<App isLoggedIn={true} />', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App isLoggedIn={true} />);
  });

  it('does not render <Login /> when isLoggedIn is true', () => {
    expect(app.find(Login).exists()).toBe(false);
  });

  it('renders <CourseList /> when isLoggedIn is true', () => {
    expect(app.find(CourseList).exists()).toBe(true);
    expect(app.find(CourseList)).toBeDefined();
  });
});

describe('Keyboard events in <App />', () => {
  let wrapper;
  let logOutMock;
  let alertMock;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls logOut and shows alert when Control and H keys are pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });

  it('removes the event listener when the component is unmounted', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'componentWillUnmount');
    wrapper.unmount();

    expect(instance.componentWillUnmount).toHaveBeenCalled();
  });
});
