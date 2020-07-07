
const spoonApiKey = '5bb17ff8de4a4ac48777208734e43797';
const submitBtn = document.querySelector('.btn');
let pairedWines=[];
let pairedText;
let photoUrls = [];
let winePhotos;
let foodInput;
let previousSearchArr = [];


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
 const buttonHandler = (event) => {
    event.preventDefault();
    foodInput = document.querySelector('#dinner-input').value;
    getWinePairing();
}

const openModal = () => {
 $('.modal').modal();
 $('#modalError').modal('open');
}

//fetches wine pairing and text
const getWinePairing = () => {
    fetch(`https://api.spoonacular.com/food/wine/pairing?food=${foodInput}&apiKey=${spoonApiKey}`)
        .then(function (response) {
            response.json()
            .then(function (data) {
              if(data.status==='failure'){
                  //error message modal and stop program
                 openModal();     
              } else {
                //wine varietals that pair with input
                pairedWines=data.pairedWines;
                //text supplied for pairing
                pairedText = data.pairingText;
                getWinePhotos('wine');
              }
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
      winePhotos = response.results;
      winePhotos.forEach(photo => 
        photoUrls.push(photo.urls.regular)
      )
      getWineCards();
    })
  // console.log(photoUrls) //For test only
  
}

const getRandom = () => {
  let num = Math.floor(Math.random()*10);
  return num;
}

//based on paired wines returned this function will create a card for each wine with a picture and the wine varietal
const getWineCards = () =>{
 
  if(pairedText === ''){
    pairedText = `Oops, looks like we don't have wine pairings for that food yet.`
  }
  let wineCardsContainerEl = document.querySelector('#wine-card-container');
  wineCardsContainerEl.innerHTML='';
  for (i=0;i<pairedWines.length;i++){

  let columnContainerEl = document.createElement('div');
  columnContainerEl.classList = 'col s12 m6 l4 card';


  let imageEl =document.createElement('img');
  imageEl.classList='responsive-img card materialbox';
  imageEl.setAttribute('alt','wine picture');
  imageEl.setAttribute('src',photoUrls[getRandom()]);
  columnContainerEl.appendChild(imageEl);

  let titleEl = document.createElement('span');
  titleEl.classList='card-title activator grey-text text-darken-4';
  titleEl.textContent = pairedWines[i];
  columnContainerEl.appendChild(titleEl);

  wineCardsContainerEl.appendChild(columnContainerEl);
  }
  let textContainerEl = document.createElement('div');
  textContainerEl.classList ='container';

  let textRowEl = document.createElement('div');
  textRowEl.classList='row';

  let wineTextColumnEl = document.createElement('div');
  wineTextColumnEl.classList = 'col s12';

  let wineTextCardEl = document.createElement('div');
  wineTextCardEl.classList = 'card-panel responsive materialbox';


  let wineTextEl = document.createElement('span');
  wineTextEl.classList ='flow-text';
  wineTextEl.textContent = pairedText;

  wineTextCardEl.appendChild(wineTextEl);
  wineTextColumnEl.appendChild(wineTextCardEl);
  textRowEl.appendChild(wineTextColumnEl);
  textContainerEl.appendChild(textRowEl);

  wineCardsContainerEl.appendChild(textContainerEl);
}

//food picture function goes here

//saves last three searches and thier pairings to local storage
const saveToStorage = () =>{
previousSearchArr.unshift(
  {
    food:foodInput,
    pairings: pairedWines
  }
);
if(previousSearchArr.length>3){
  previousSearchArr.pop();
}
  localStorage.setItem('previousSearch',JSON.stringify(previousSearchArr));

}

//load from local storage
const loadFromStorage = () => {
  let newArr = JSON.parse(localStorage.getItem('previousSearch'));
  if (newArr){
    previousSearchArr = newArr;
    // displayPrevious();  //needs to be written
  }
}

//display previous searches
const displayPrevious = () => {
  //previousSearchArr has info stored in object as food and pairings(array)
}


//submit button listener
submitBtn.addEventListener('click',buttonHandler);

//Jquery to make wine cards responsive and enlarge when clicked on
$(document).ready(function(){
  $('.materialbox').materialbox();
});



