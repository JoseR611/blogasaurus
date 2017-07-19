function greeting(){
  var username = $('#nameOfUser').val();
  $('h1').text("Hello " + username + "!");
}

function setup(){
  $('#ok_button').click(greeting);
}

$(document).ready(setup);
