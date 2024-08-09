import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import Close from '../assets/close-icon.png';
import './Notifications.css';

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

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className='flex-area'>
          {
            displayDrawer ? (
              <div className='Notifications' style={{ position: 'relative' }}>
                {
                  listNotifications.length === 0 ? (
                    <p>No new notifications for now</p>
                  ) : (
                    <>
                      <p>Here is the list of notifications</p>
                      <ul className='Notifications-list'>
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
              <div className='menuItem'>
                <p>Your notifications</p>
              </div>
            )
          }
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
