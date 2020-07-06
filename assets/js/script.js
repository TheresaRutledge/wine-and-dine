
const spoonApiKey = '5bb17ff8de4a4ac48777208734e43797';
const submitBtn = document.querySelector('.btn');
let pairedWines=[];
let pairedText;
let photoUrls = [];
let winePhotos;

(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space




//SEARCH BAR
$(document).ready(function () {
  $('.sidenav').sidenav();
});


//SELECT BAR
$(document).ready(function () {
  $('select').formSelect();
});

//functions to call when submit clicked
const buttonHandler = (event) =>{
    event.preventDefault();
    foodInput = document.querySelector('#dinner-input').value;
    getWinePairing();
    getWinePhotos();
    //add other function calls here
}


//fetches wine pairing and text
const getWinePairing = () => {
    fetch(`https://api.spoonacular.com/food/wine/pairing?food=${foodInput}&apiKey=${spoonApiKey}`)
        .then(function (response) {
            response.json()
            .then(function (data) {
              if(data.status==='failure'){
                  //error message modal
                  console.log('Not a valid food entry');
              } else {
                //wine varietals that pair with input
                pairedWines=data.pairedWines;
                //text supplied for pairing
                pairedText = data.pairedText;
              }
            })
        })
}
//fetches 10 wine images and stores to photoUrls
function getWinePhotos () {
  fetch(
    'https://api.unsplash.com/search/photos?query=wine&' +
      'client_id=BSXJED6UhyH4DSPVkqo8B2ThVz-Hyq083g1E7AhrR1k'
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      console.log(response)
      winePhotos = response.results
      winePhotos.forEach(photo => {
        photoUrls.push(photo.urls.regular)
      })
    })
  console.log(photoUrls) //For test only
}

//submit button listener
submitBtn.addEventListener('click',buttonHandler);
