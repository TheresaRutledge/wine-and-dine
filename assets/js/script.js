let submitBtn = document.querySelector('.btn');

const buttonHandler = (event) => {
  preventDefault();
}

submitBtn.addEventListener('submit', buttonHandler);

//SIDENAV
$(document).ready(function () {
  $('select').formSelect();
});

(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//SEARCH BAR
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});
// Or with jQuery
$(document).ready(function () {
  $('.sidenav').sidenav();
});


//SELECT BAR
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});
// Or with jQuery
$(document).ready(function () {
  $('select').formSelect();
});
