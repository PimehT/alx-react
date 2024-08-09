import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe('utils', () => {
  it('getFullYear returns the correct year', () => {
    const check = new Date().getFullYear();
    expect(getFullYear()).toEqual(check);
  });

  it('getFooterCopy returns correct text if arg is true', () => {
    const trueText = getFooterCopy(true);
    expect(trueText).toEqual('Holberton School');
  });

  it('getFooterCopy returns correct text if arg is false', () => {
    const falseText = getFooterCopy(false);
    expect(falseText).toEqual('Holberton School main dashboard');
  });

  it('getLatestNotification returns correct string', () => {
    const text = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toEqual(text);
  });
});
