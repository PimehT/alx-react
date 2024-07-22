import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function(){
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="startButton">Click here to get started</button>');
$('body').append('<p id="count">{count}</p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Function to update counter and bind debounce
let count = 0;
const updateCounter = _.debounce(() => {
  count++;
  $('#count').text(`${count} clicks on the button`);
}, 300);
// Bind debounce function to click event on the button
$('#startButton').on('click', updateCounter);
});
