import React from 'react';
import Close from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications () {
  const handleClick = () => {
    console.log('Close button has been clicked');
  }

  return (
    <div className='Notifications' style={{ position: 'relative' }}>
      <p>Here is the list of notifications</p>
      <ul className='Notifications-list'>
        <NotificationItem type='default' value={'New course available'} />
        <NotificationItem type='urgent' value={'New resume available'} />
        <NotificationItem html={{ __html: getLatestNotification() }} />
      </ul>
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
  );
}

export default Notifications;
