import React from "react";
import CourseList from "./CourseList";
import { shallow } from 'enzyme';

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('table#CourseList')).toHaveLength(1);
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('thead').children()).toHaveLength(2);
    expect(wrapper.find('tbody').children()).toHaveLength(3);
  })
})
