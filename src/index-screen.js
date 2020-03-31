import axios from 'axios'

import augmentWithFavourites from './core/augment-with-favourites'
import Config from './config/config'
import errorPrinter from './core/error-printer'
import filterFavourites from './core/filter-favourites'
import printerBuilder from './core/printer-builder'
import requestStationsBuilder from './core/request-stations-builder'
import sortByPrice from './core/sort-by-price'

Promise.all(Config.cities.map(requestStationsBuilder(axios, Config.STATIONS_URL)))
  .then(allStations => allStations.flat())
  .then(filterFavourites(Config.favourites))
  .then(augmentWithFavourites(Config.favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(errorPrinter(console))
