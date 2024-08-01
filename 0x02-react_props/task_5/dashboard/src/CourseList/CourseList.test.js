import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  it('renders a <CourseList /> component', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
  });

  describe('With CourseList Empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders correctly if you pass an empty array', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(3);
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toEqual('No course available yet');
    });

    it('renders correctly if you don’t pass the listCourses property', () => {
      wrapper = shallow(<CourseList />);
      expect(wrapper.find(CourseListRow)).toHaveLength(3);
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toEqual('No course available yet');
    });
  });

  describe('With CourseList containing elements', () => {
    let wrapper;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders correctly when you pass a list of courses', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(5); // 2 header rows + 3 course rows
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toEqual('ES6');
      expect(wrapper.find(CourseListRow).at(3).prop('textFirstCell')).toEqual('Webpack');
      expect(wrapper.find(CourseListRow).at(4).prop('textFirstCell')).toEqual('React');
    });
  });
});
