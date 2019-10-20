import axios from 'axios'
import StationRecord from './model/geoportal/station-record'
import StationRequestParams from './model/geoportal/station-request-params'
import cities from './config/cities'

const targetUrl = 'https://geoportalgasolineras.es/rest/busquedaEstaciones'

function sortByPrice (left, right) {
  return left.price - right.price
}

function filterFavourites (stationRecord) {
  const favourites = [
    // Alcala
    3079, // Alcampo
    2929, // Galp cerca del Alcampo
    3067, // Galp Villamalea
    4698, // Galp NII
    4697, // Galp Mercadona Meco
    12721, // Galp rotonda Fiesta

    // Guada
    8292, // Galp en rotonda de la bici

    // Pioz
    11591 // Repsol Pioz
  ]

  return favourites.includes(stationRecord.station.id)
}

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
  .then(stations => stations.filter(filterFavourites))
  .then(stations => stations.sort(sortByPrice))
  .then(log)
  .catch(error => {
    console.log('error', error)
  })
