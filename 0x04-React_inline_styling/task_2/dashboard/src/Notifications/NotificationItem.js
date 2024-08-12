import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <>
        {type && value ? (
          <li
            className={css(type === 'urgent' ? styles.urgentItem : styles.defaultItem)}
            data-notification-type={type}
            onClick={() => markAsRead(id)}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            className={css(styles.urgentItem)}
            data-notification-type="urgent"
            dangerouslySetInnerHTML={{ __html: html.__html }}
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
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

export default NotificationItem;
