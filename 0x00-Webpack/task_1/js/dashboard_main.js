import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  let count = 0;
  return function() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };
}

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>',
    '<p>Dashboard data for the students</p>',
    '<button>Click here to get started</button>',
    '<p id="count"></p>',
    '<p>Copyright - Holberton School</p>'
  );
  const countUpdate = updateCounter();
  $('button').on('click', _.debounce(countUpdate, 300));
});
