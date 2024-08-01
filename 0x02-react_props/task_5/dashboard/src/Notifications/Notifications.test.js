import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const component = shallow(<Notifications />);
    expect(component).toBeDefined();
  });

  it('renders correctly with an empty array or without listNotifications property', () => {
    let wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
    expect(wrapper.text()).toContain('No new notification for now');

    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
    expect(wrapper.text()).toContain('No new notification for now');
  });

  it('renders the correct number of NotificationItem components when a list of notifications is passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('does not display "Here is the list of notifications" when listNotifications is empty, but displays "No new notification for now"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
    expect(wrapper.text()).toContain('No new notification for now');
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it("renders an unordered list", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find("ul")).toHaveLength(1);
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("does not display div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".Notifications")).toHaveLength(0);
  });

  it("displays menu item when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("displays div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications")).toHaveLength(1);
  });
});
