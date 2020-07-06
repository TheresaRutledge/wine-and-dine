
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
 const buttonHandler = (event) => {
    event.preventDefault();
    foodInput = document.querySelector('#dinner-input').value;
    getWinePhotos();
    getWinePairing();
    getWineCards();//Can't do this until getWinePairing and getWinePhotos have resolved
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
      winePhotos = response.results;
      winePhotos.forEach(photo => 
        photoUrls.push(photo.urls.regular)
      )
    })
  // console.log(photoUrls) //For test only
  
}

//based on paired wines returned this function will create a card for each wine with a picture and the wine varietal
const getWineCards = () =>{
  let wineCardsContainerEl = document.querySelector('#wine-card-container');
  wineCardsContainerEl.innerHTML='';
  for (i=0;i<pairedWines.length;i++){

  let columnContainerEl = document.createElement('div');
  columnContainerEl.classList = 'col s12 m4 grey';

  let cardContainerEl =  document.createElement('div');
  cardContainerEl.classList ='card';

  let imageContainerEl = document.createElement('div');
  imageContainerEl.classList = 'card-image waves-effect waves-block waves-light';

  let imageEl =document.createElement('img');
  imageEl.classList='activator wine-image';
  imageEl.setAttribute('alt','wine picture');
  imageEl.setAttribute('src',photoUrls[getRandom()]);
  imageContainerEl.appendChild(imageEl);

  let titleContainerEl = document.createElement('div');
  titleContainerEl.classList = 'card-content';

  let titleEl = document.createElement('span');
  titleEl.classList='card-title wine-name activator grey-text text-darken-4';
  titleEl.textContent = pairedWines[i];
  titleContainerEl.appendChild(titleEl);

  cardContainerEl.appendChild(imageContainerEl);
  cardContainerEl.appendChild(titleContainerEl);

  columnContainerEl.appendChild(cardContainerEl);

  wineCardsContainerEl.appendChild(columnContainerEl);

  }

}
//submit button listener
submitBtn.addEventListener('click',buttonHandler);
