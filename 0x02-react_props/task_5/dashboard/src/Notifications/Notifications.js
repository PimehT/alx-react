import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import Close from '../assets/close-icon.png';
import './Notifications.css';

function Notifications ({ displayDrawer, listNotifications }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  }

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
                onClick={handleClick}
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
