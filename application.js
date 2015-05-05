$(document).ready(
  function() {
   $('#add').click(function() {
     var text = $('#text').text();
     var text_span = $("<span>" + text + "</span>");
     console.log(text);
     $('#content').append(text_span);
     });
  });
