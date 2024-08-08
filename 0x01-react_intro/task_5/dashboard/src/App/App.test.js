import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it('renders a div of class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toEqual(true);
  });

  it('renders a div of class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toEqual(true);
  });

  it('renders a div of class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toEqual(true);
  });
});
