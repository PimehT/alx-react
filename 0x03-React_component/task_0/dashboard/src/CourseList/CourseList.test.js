import React from "react";
import CourseList from "./CourseList";
import { shallow } from 'enzyme';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    const wrapper1 = shallow(<CourseList listCourses={[]} />);
    expect(wrapper).toBeDefined();
    expect(wrapper1).toBeDefined();
    expect(wrapper.find('table#CourseList')).toHaveLength(1);
    expect(wrapper1.find('table#CourseList')).toHaveLength(1);
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('thead').children()).toHaveLength(2);
    expect(wrapper.find('tbody').children()).toHaveLength(listCourses.length);
  });
});
