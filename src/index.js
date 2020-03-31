import axios from 'axios'

import augmentWithFavourites from './core/augment-with-favourites'
import config from './config/config'
import errorPrinter from './core/error-printer'
import filterFavourites from './core/filter-favourites'
import csvSaver from './core/csv-printer'
import requestStationsBuilder from './core/request-stations-builder'
import sortById from './core/sort-by-id'
import FileLogger from './core/file-logger'

Promise.all(config.cities.map(requestStationsBuilder(axios)))
  .then(allStations => allStations.flat())
  .then(filterFavourites(config.favourites))
  .then(augmentWithFavourites(config.favourites))
  .then(sortById)
  .then(csvSaver(new FileLogger(config.outputFile)))
  .catch(errorPrinter(console))
