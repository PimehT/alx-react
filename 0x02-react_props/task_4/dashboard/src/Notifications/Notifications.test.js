import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const component = shallow(<Notifications />);
    expect(component).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it("renders an unordered list", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("ul")).toHaveLength(1);
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("does not display div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
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
