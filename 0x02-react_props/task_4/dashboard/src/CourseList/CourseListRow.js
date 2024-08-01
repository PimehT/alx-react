import React from 'react';
import PropTypes from 'prop-types';


export default function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell !== null ? (
          <>
            <th colSpan="2">{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan="2">{textFirstCell}</th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};
