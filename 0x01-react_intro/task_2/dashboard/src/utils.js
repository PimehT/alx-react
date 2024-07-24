export function getFullYear () {
  return new Date().getFullYear();
}

export function getFooterCopy (isIndex) {
  if (typeof isIndex === 'boolean') {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  } else {
    throw new Error('not a boolean');
  }
}

export function getLatestNotification () {
  return '<strong>Ur<strong>Urgent requirement</strong> - complete by EOD';
}
