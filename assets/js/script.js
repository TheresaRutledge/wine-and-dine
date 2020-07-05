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


//PUSH PIN
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.pushpin');
  var instances = M.Pushpin.init(elems, options);
});

// Or with jQuery
$(document).ready(function () {
  $('.pushpin').pushpin();
});

$('.pushpin-demo-nav').each(function () {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
});


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
