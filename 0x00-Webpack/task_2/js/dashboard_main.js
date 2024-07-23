import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  let count = 0;
  return function() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };
}

$(function() {
  $('body').append('<div id="logo"></div>');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  const countUpdate = updateCounter();
  $('button').on('click', _.debounce(countUpdate, 500));
});
