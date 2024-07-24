import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has three list items', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('renders text "Here is the list of notifications"', () => {
    const searchText = 'Here is the list of notifications';
    expect(wrapper.contains(searchText)).toBe(true);
  });
});
