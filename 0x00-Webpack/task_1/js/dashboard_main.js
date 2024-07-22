import $ from 'jquery';
import _ from 'lodash';

$(function () {
  $('body').append('<p>Holberton Dashboard</p>',
    '<p>Dashboard data for the students</p>',
    '<button id="start-btn">Click here to get started</button>',
    '<p id="count">{count}</p>',
    '<p>Copyright - Holberton School</p>'
  );
  let count = 0;
  const updateCounter = _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 300);
  $('#start-btn').on('click', updateCounter);
});
