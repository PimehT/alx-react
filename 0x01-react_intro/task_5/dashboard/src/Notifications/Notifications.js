import React from 'react';
import Close from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

function Notifications () {
  const handleClick = () => {
    console.log('Close button has been clicked');
  }

  return (
    <div className='Notifications' style={{ position: 'relative' }}>
      <p>Here is the list of notifications</p>
      <ul className='Notifications-list'>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
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
