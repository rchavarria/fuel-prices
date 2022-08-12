import axios from 'axios'
import Config from './config/config'
import filterFavourites from './core/filter-favourites'
import requestStationsBuilder from './core/request-stations-builder'

Promise.all(Config.cities.map(requestStationsBuilder(axios, Config.STATIONS_URL)))
  .then(allStations => allStations.flat())
  .then(filterFavourites(Config.favourites))
  .then(favs => {
    console.log('fav stations', favs)
    return favs
  })
