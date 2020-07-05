let photoUrls = []
let winePhotos

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
getWinePhotos()
