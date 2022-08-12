import axios from 'axios'
import Config from './config/config'
import filterFavourites from './core/filter-favourites'
import requestStationsBuilder from './core/request-stations-builder'
import augmentWithFavourites from './core/augment-with-favourites'
import sortByPrice from './core/sort-by-price'
import printerBuilder from './core/printer-builder'
import errorPrinter from './core/error-printer'

Promise.all(Config.cities.map(requestStationsBuilder(axios, Config.STATIONS_URL)))
  .then(allStations => allStations.flat())
  .then(filterFavourites(Config.favourites))
  .then(augmentWithFavourites(Config.favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(errorPrinter(console))
