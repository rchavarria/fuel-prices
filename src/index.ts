import axios from 'axios'
import Config from './config/config'
import augmentWithFavourites from './core/augment-with-favourites'
import errorPrinter from './core/error-printer'
import filterFavourites from './core/filter-favourites'
import csvSaver from './core/csv-printer'
import requestStationsBuilder from './core/request-stations-builder'
import sortById from './core/sort-by-id'
import FileLogger from './core/file-logger'

// TODO remove this CLI version, I no longer want to keep a CSV file
Promise.all(Config.cities.map(requestStationsBuilder(axios, Config.STATIONS_URL)))
  .then(allStations => allStations.flat())
  .then(filterFavourites(Config.favourites))
  .then(augmentWithFavourites(Config.favourites))
  .then(sortById)
  .then(csvSaver(new FileLogger(Config.outputFile)))
  .catch(errorPrinter(console))
