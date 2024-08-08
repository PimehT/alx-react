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
    expect(wrapper.find('.App-header')).toBeDefined();
  });

  it('renders a div of class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toBeDefined();
  });

  it('renders a div of class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toBeDefined();
  });
});
