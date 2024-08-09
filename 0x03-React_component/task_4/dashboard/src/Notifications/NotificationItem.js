import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
  
    return (
      <>
        {type && value ? (
          <li data-notification-type={type} onClick={() => markAsRead(id)}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            data-urgent
            dangerouslySetInnerHTML={{ ...html }}
            onClick={() => markAsRead(id)}
          ></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.oneOf(['default', 'urgent']).isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
