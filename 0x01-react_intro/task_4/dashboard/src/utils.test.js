import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe('Utils', () => {
  describe('getFullYear', () => {
    it('should return the current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toEqual(currentYear);
    });
  });

  describe('getFooterCopy', () => {
    it('should return "Holberton School" when isIndex is true', () => {
      expect(getFooterCopy(true)).toEqual('Holberton School');
    });

    it('should return "Holberton School main dashboard" when isIndex is false', () => {
      expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });
  });

  describe('getLatestNotification', () => {
    it('should return the latest notification', () => {
      const expectedNotification = '<strong>Ur<strong>Urgent requirement</strong> - complete by EOD';
      expect(getLatestNotification()).toEqual(expectedNotification);
    });
  });
});
