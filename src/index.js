import axios from 'axios'

import cities from './config/cities'
import errorPrinter from './core/error-printer'
import favourites from './config/favourties'
import filterFavourites from './core/filter-favourites'
import printerBuilder from './core/printer-builder'
import requestStationsBuilder from './core/request-stations-builder'
import sortByPrice from './core/sort-by-price'

Promise.all(cities.map(requestStationsBuilder(axios)))
  .then(allStations => allStations.flat())
  .then(filterFavourites(favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(errorPrinter(console))
