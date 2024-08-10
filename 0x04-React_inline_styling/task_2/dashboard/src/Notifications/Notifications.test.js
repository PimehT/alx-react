import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
    expect(wrapper.find('p').text()).toEqual(text);
  });

  it('renders the first NotificationItem with the correct HTML', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    expect(firstNotificationItem.prop('type')).toBe('default');
    expect(firstNotificationItem.prop('value')).toBe('New course available');
  });

  it('does not render div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('does not render div.menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(0);
  });

  // it('renders div.Notifications when displayDrawer is true', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />);
  //   expect(wrapper.find('div.Notifications')).toHaveLength(1);
  // });

  it('renders with empty listNotifications property or without the property at all', () => {
    const wrapperWithoutList = shallow(<Notifications displayDrawer={true} />);
    const wrapperWithEmptyList = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapperWithoutList.exists()).toBe(true);
    expect(wrapperWithEmptyList.exists()).toBe(true);
  });

  it('renders proper number of items when list is passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
  });

  it('renders "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    const text = 'No new notifications for now';
    expect(wrapper.find('p').text()).toEqual(text);
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

  it('does not rerender when updating props with the same list', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications });
    expect(instance.shouldComponentUpdate).toHaveBeenCalled();
    expect(instance.shouldComponentUpdate).toHaveReturnedWith(false);
  });

  it("re-renders if listNotifications is changed", () => {
    const newListNotifications = [
      ...listNotifications,
      { id: 4, type: "default", value: "Foo" },
    ];
    const instance = wrapper.instance();

    expect(instance.shouldComponentUpdate({ listNotifications: newListNotifications })).toBe(true);
  });
});
