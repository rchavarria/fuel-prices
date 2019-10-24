import axios from 'axios'
import StationRecord from './model/geoportal/station-record'
import StationRequestParams from './model/geoportal/station-request-params'
import sortByPrice from './core/sort-by-price'
import filterFavourites from './core/filter-favourites'
import print from './core/print'
import cities from './config/cities'
import favourites from './config/favourties'

const targetUrl = 'https://geoportalgasolineras.es/rest/busquedaEstaciones'

function requestStations (cityId) {
  return axios.post(targetUrl, StationRequestParams.fromCity(cityId))
    .then(response => response.data)
    .then(data => data.estaciones.map(StationRecord.fromRequest))
}

Promise.all(cities.map(requestStations))
  .then(allStations => allStations.flat())
  .then(filterFavourites(favourites))
  .then(sortByPrice)
  .then(print)
  .catch(error => {
    console.log('error', error)
  })
