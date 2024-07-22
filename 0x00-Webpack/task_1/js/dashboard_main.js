import $ from 'jquery';

$(function () {
  $('body').append('<p>Holberton Dashboard</p>',
    '<p>Dashboard data for the students</p>',
    '<button>Click here to get started</button>',
    '<p id="count"></p>',
    '<p>Copyright - Holberton School</p>'
  );
  updateCounter();
});

let count = 0;
function updateCounter () {
  $('button').on('click', function () {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  });
}
