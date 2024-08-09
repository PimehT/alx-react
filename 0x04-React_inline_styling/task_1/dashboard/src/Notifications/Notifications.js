import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import Close from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleClick = () => {
    console.log('Close button has been clicked');
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.flexArea)}>
          {
            displayDrawer ? (
              <div className={css(styles.Notifications)} style={{ position: 'relative' }}>
                {
                  listNotifications.length === 0 ? (
                    <p>No new notifications for now</p>
                  ) : (
                    <>
                      <p>Here is the list of notifications</p>
                      <ul className={css(styles.notificationsList)}>
                        {listNotifications.map((notification) => (
                          <NotificationItem
                            key={notification.id}
                            type={notification.type}
                            value={notification.value}
                            html={notification.html}
                            markAsRead={() => this.markAsRead(notification.id)}
                          />
                        ))}
                      </ul>
                    </>
                  )
                }
                <button
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: 'none',
                    border: 'none',
                  }}
                  aria-label='Close'
                  onClick={this.handleClick}
                >
                  <img src={Close} alt='close button' width='10px' />
                </button>
              </div>
            ) : (
              <div className={css(styles.menuItem)}>
                <p>Your notifications</p>
              </div>
            )
          }
        </div>
      </>
    );
  }
}

const colorPrimary = '#E02241';
const colorDefault = '#01017e';
const colorUrgent = '#FF0000';

const styles = StyleSheet.create({
  Notifications: {
    border: `.1rem dashed ${colorPrimary}`,
    width: '30rem',
    position: 'relative',
    zIndex: 5,
  },
  notificationsList: {
    listStyle: 'disc',
    margin: '1rem 0 1rem 2rem',
  },
  flexArea: {
    position: 'absolute',
    right: '0.2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
