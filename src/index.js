import axios from 'axios'
import StationRecord from './model/geoportal/station-record'
import StationRequestParams from './model/geoportal/station-request-params'
import cities from './config/cities'
import sortByPrice from './core/sort-by-price'
import filterFavourites from './core/filter-favourites'

const targetUrl = 'https://geoportalgasolineras.es/rest/busquedaEstaciones'
const favourites = [
  // Alcala
  { id: 3079, label: 'Alcalá: Alcampo' },
  { id: 2929, label: 'Alcalá: Galp cerca del Alcampo' },
  { id: 3067, label: 'Alcalá: Galp Villamalea' },
  { id: 4698, label: 'Alcalá: Galp NII' },
  { id: 4697, label: 'Alcalá: Galp Mercadona Meco' },
  { id: 12721, label: 'Alcalá: Galp rotonda Fiesta' },

  // Guada
  { id: 8292, label: 'Guada: Galp en rotonda de la bici' },

  // Pioz
  { id: 11591, label: 'Pioz: Repsol Pioz' }
]

function log (stations) {
  console.log('Hay', stations.length, 'estaciones')

  stations.forEach(stationRecord => {
    console.log('(', stationRecord.station.id, ') ', 'Estación', stationRecord.station.label, 'en', stationRecord.station.address, 'tiene un precio de', stationRecord.price)
  })
}

function requestStations (cityId) {
  return axios.post(targetUrl, StationRequestParams.fromCity(cityId))
    .then(response => response.data)
    .then(data => data.estaciones.map(StationRecord.fromRequest))
}

Promise.all(cities.map(requestStations))
  .then(allStations => allStations.flat())
  .then(filterFavourites(favourites))
  .then(sortByPrice)
  .then(log)
  .catch(error => {
    console.log('error', error)
  })
