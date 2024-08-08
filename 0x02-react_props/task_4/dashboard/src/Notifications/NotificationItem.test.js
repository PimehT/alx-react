import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html when type and value is passed', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('renders correct html when html prop is passed', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
