import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the right paragraph', () => {
    const wrapper = shallow(<Notifications />);
    const text = 'Here is the list of notifications';
    expect(wrapper.find('p').contains(text)).toEqual(true);
  });

  it('renders the first NotificationItem with the correct HTML', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const expectedHtml = '<li data-notification-type="default">New course available</li>';
    expect(firstNotificationItem.html()).toEqual(expectedHtml);
  });
})
