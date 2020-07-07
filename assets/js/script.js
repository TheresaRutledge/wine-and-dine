
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
  $('.sidenav').sidenav()
})

//SELECT BAR
$(document).ready(function () {
  $('select').formSelect()
})

//functions to call when submit clicked
const buttonHandler = event => {
  event.preventDefault()
  foodInput = 'burger' //Need selector here when html is done
  getWinePairing()
  getWinePhotos()
  //add other function calls here
}

//fetches wine pairing and text
const getWinePairing = () => {
  fetch(
    `https://api.spoonacular.com/food/wine/pairing?food=${foodInput}&apiKey=${spoonApiKey}`
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      //wine varietals that pair with input
      pairedWines = data.pairedWines
      //text supplied for pairing
      pairedText = data.pairedText
    })
  })
}
//fetches 10 "wine" or "steak" or "pasta" images as specified in the input parameter,
// and stores to photoUrls
function getWinePhotos (food) {
  let url = 'https://api.unsplash.com/search/photos?query='
  let client_id = '&client_id=BSXJED6UhyH4DSPVkqo8B2ThVz-Hyq083g1E7AhrR1k'
  let fetchUrl = `${url}${food}${client_id}`
  console.log(fetchUrl)

  fetch(fetchUrl)
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

//Jquery to make wine cards responsive and enlarge when clicked on
$(document).ready(function(){
  $('.materialbox').materialbox();
});

