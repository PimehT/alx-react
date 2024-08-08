import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  })

  it('renders the right paragraph', () => {
    const wrapper = shallow(<Notifications />);
    const text = 'Here is the list of notifications';
    expect(wrapper.find('p').contains(text)).toEqual(true);
  })
})
