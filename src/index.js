import axios from 'axios'
import sortByPrice from './core/sort-by-price'
import filterFavourites from './core/filter-favourites'
import cities from './config/cities'
import favourites from './config/favourties'
import printerBuilder from './core/printer-builder'
import requestStationsBuilder from './core/request-stations-builder'

Promise.all(cities.map(requestStationsBuilder(axios)))
  .then(allStations => allStations.flat())
  .then(filterFavourites(favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(error => {
    console.log('error', error)
  })
