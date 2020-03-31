import axios from 'axios'

import augmentWithFavourites from './core/augment-with-favourites'
import config from './config/config'
import errorPrinter from './core/error-printer'
import filterFavourites from './core/filter-favourites'
import printerBuilder from './core/printer-builder'
import requestStationsBuilder from './core/request-stations-builder'
import sortByPrice from './core/sort-by-price'

Promise.all(config.cities.map(requestStationsBuilder(axios)))
  .then(allStations => allStations.flat())
  .then(filterFavourites(config.favourites))
  .then(augmentWithFavourites(config.favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(errorPrinter(console))
