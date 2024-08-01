import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import './CourseList.css';

const CourseList = ({ listCourses = [] }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {/* <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} /> */}
        {/* <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} /> */}
        {/* <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} /> */}
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.protoTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;
