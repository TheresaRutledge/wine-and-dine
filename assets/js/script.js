let submitBtn = document.querySelector('.btn');

const buttonHandler = (event) =>{
    preventDefault();
}

submitBtn.addEventListener('submit',buttonHandler);


$(document).ready(function(){
  $('select').formSelect();
});
     


(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
