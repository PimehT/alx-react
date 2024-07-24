import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the App-header div', () => {
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it('renders the App-body div', () => {
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });

  it('renders the App-footer div', () => {
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});
