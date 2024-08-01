import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  it('renders a <CourseList /> component', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
});
