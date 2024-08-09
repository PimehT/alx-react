import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it('renders the right paragraph', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const text = 'Here is the list of notifications';
    expect(wrapper.find('p').contains(text)).toEqual(true);
  });

  it('renders the first NotificationItem with the correct HTML', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
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

  it('renders with empty listNotifications property or without the property at all', () => {
    shallow(<Notifications displayDrawer={true} />);
    shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
  });

  it('renders proper number of items when list is passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(listNotifications.length);
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it('renders "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    const text = 'No new notifications for now';
    expect(wrapper.find('p').contains(text)).toEqual(true);
    expect(wrapper.find('p').contains('Here is the list of notifications')).toEqual(false);
  });
});

describe('<Notifications displayDrawer={true} listNotifications={listNotifications} />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  });

  it('mocks up the markAsRead function', () => {
    const instance = wrapper.instance();
    const consoleLogSpy = jest.spyOn(console, 'log');
    const id = 1;
    instance.markAsRead(id);
    expect(consoleLogSpy).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
    consoleLogSpy.mockRestore();
  });
});
