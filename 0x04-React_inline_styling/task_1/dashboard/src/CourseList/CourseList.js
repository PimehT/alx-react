import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import {StyleSheet, css } from 'aphrodite';

function CourseList ({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
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
}

const styles = StyleSheet.create({
  table: {
    marginTop: '2em',
    width: '90%',
    border: '1px solid #999999',
    fontSize: '1.2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  th: {
    borderBottom: '1px solid #999999',
    width: '80%',
  },

  td: {
    width: '80%',
  },

  tr: {
    "nth-child(2)": {
      textAlign: "left",
    },
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
