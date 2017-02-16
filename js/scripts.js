$(document).ready(function() {
  var over18 = parseInt(prompt("Please enter your age."));

  if (over18 >= 18) {
    $('#voter').show();
  } else {
    $('#under-18').show();
  }
});
