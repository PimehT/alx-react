import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html }) {
  return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? <li data-urgent dangerouslySetInnerHTML={{...html}}></li> : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
