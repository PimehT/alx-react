import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe('<CourseListRow />', () => {
  it('renders correctly th elements within a tr element when isHeader is true', () => {
    const wrapper1 = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    const wrapper2 = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);

    expect(wrapper1.find('th').prop('colSpan')).toBe(2);
    expect(wrapper2.find('th')).toHaveLength(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper1 = shallow(<CourseListRow isHeader={false} textFirstCell="test" />);
    const wrapper2 = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
    expect(wrapper1.find('tr').find('td')).toHaveLength(2);
    expect(wrapper2.find('tr').find('td')).toHaveLength(2);
  });
});
