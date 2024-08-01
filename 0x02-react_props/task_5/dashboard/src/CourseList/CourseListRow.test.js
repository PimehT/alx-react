import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

describe('<CourseListRow />', () => {
  it('renders a <CourseListRow /> component', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='test' />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a <CourseListRow /> component and checks HTML structure when isHeader is true and textSecondCell is not passed', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
    expect(wrapper.html()).toBe('<tr><th colSpan="2">test</th></tr>');
  });

  it('renders a <CourseListRow /> component and checks HTML structure when isHeader is true and textSecondCell is passed', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.html()).toBe('<tr><th colSpan="2">test</th><th>test</th></tr>');
  });

  it('renders a <CourseListRow /> component and checks HTML structure when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.html()).toBe('<tr><td>test</td><td>test</td></tr>');
  });

  // it('verifies that the prop isHeader is required', () => {
  //   expect(CourseListRow.propTypes.isHeader).toBeDefined();
  //   expect(CourseListRow.propTypes.isHeader).toBe(PropTypes.bool);
  // });

  it('verifies that the prop textFirstCell is required', () => {
    expect(CourseListRow.propTypes.textFirstCell).toBeDefined();
    expect(CourseListRow.propTypes.textFirstCell).toBe(PropTypes.string.isRequired);
  });

  // it('verifies that the prop textSecondCell is required', () => {
  //   expect(CourseListRow.propTypes.textSecondCell).toBeDefined();
  //   expect(CourseListRow.propTypes.textSecondCell).toBe(PropTypes.string);
  // });
});
