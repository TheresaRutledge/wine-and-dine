const spoonApiKey = '5bb17ff8de4a4ac48777208734e43797';
const submitBtn = document.querySelector('.btn');
let pairedWines=[];
let pairedText;
  


(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//functions to call when submit clicked
const buttonHandler = (event) =>{
    event.preventDefault();
    foodInput = 'burger'//Need selector here when html is done
    getWinePairing();
    //add other function calls here
}


//fetches wine pairing and text
const getWinePairing = () => {
    fetch(`https://api.spoonacular.com/food/wine/pairing?food=${foodInput}&apiKey=${spoonApiKey}`)
        .then(function (response) {
            response.json()
            .then(function (data) {
                console.log(data);
                //wine varietals that pair with input
                pairedWines=data.pairedWines;
                //text supplied for pairing
                pairedText = data.pairedText;
            })
        })
}


//submit button listener
submitBtn.addEventListener('click',buttonHandler);
