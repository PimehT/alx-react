import $ from "jquery";

$(document).ready(function() {
  const paragraphs = [
    'Holberton Dashboard', 
    'Dashboard data for the students',
    'Copyright - Holberton School'
  ];
  
  const html = paragraphs.map(text => `<p>${text}</p>`).join('');
  
  $('body').append(html);
});
