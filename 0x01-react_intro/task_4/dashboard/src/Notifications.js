import React from 'react';
import './Notifications.css';
import Close from './close-icon.png';

export default function Notifications () {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  const getLatestNotification = () => {
    return '<strong>Urgent requirement</strong> - complete by EOD';
  }

  return (
    <div className='Notifications' style={{position: 'relative'}}>
      <button
        aria-label='Close'
        onClick={handleClick}
        style={
          {position: 'absolute',
            right: '.2rem',
            top: '.2rem',
            border: 'none',
            background: 'none'
          }
        }
      >
        <img src={Close} alt='close-icon' style={{ width: '.5rem'}} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li data='urgent' dangerouslySetInnerHTML={{
          __html: getLatestNotification()
        }}></li>
      </ul>
    </div>
  );
}
