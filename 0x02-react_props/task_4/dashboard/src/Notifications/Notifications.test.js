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
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the right paragraph', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const text = 'Here is the list of notifications';
    expect(wrapper.find('p').contains(text)).toEqual(true);
  });

  it('renders the first NotificationItem with the correct HTML', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const expectedHtml = '<li data-notification-type="default">New course available</li>';
    expect(firstNotificationItem.html()).toEqual(expectedHtml);
  });

  it('renders div.menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('does not render div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('does not render div.menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('renders div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });
});
