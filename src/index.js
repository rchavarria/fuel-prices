import sortByPrice from './core/sort-by-price'
import filterFavourites from './core/filter-favourites'
import cities from './config/cities'
import favourites from './config/favourties'
import printerBuilder from './core/printer-builder'
import requestStations from './core/request-stations'

Promise.all(cities.map(requestStations))
  .then(allStations => allStations.flat())
  .then(filterFavourites(favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(error => {
    console.log('error', error)
  })
