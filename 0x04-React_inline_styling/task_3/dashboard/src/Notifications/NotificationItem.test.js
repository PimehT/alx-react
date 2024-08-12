import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html when type and value is passed', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toContain('data-notification-type="default"');
    expect(wrapper.text()).toBe('test');
  });

  it('renders correct html when html prop is passed', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('data-notification-type="urgent"');
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('calls markAsRead with the correct ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    const notification = {
      id: 1,
      type: 'default',
      value: 'New course available',
    };

    const wrapper = shallow(
      <NotificationItem
        type={notification.type}
        value={notification.value}
        markAsRead={markAsReadSpy}
        id={notification.id}
      />
    );

    wrapper.find('li').first().simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(notification.id);
  });
});
