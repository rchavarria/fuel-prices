import axios from 'axios'
import StationRecord from './model/geoportal/station-record'

const targetUrl = 'https://geoportalgasolineras.es/rest/busquedaEstaciones'
const alcalaStationsRequestBody = {
  'tipoEstacion': 'EESS',
  'idProvincia': '28',
  'idMunicipio': 35174,
  'idProducto': 4,
  'rotulo': '',
  'eessEconomicas': false,
  'conPlanesDescuento': false,
  'horarioInicial': null,
  'horarioFinal': null,
  'calle': '',
  'numero': '',
  'codPostal': '',
  'tipoVenta': null,
  'idOperador': null,
  'nombrePlan': '',
  'idTipoDestinatario': null
}

const guadaStationsRequestBody = {
  'tipoEstacion': 'EESS',
  'idProvincia': '19',
  'idMunicipio': 20378,
  'idProducto': 4,
  'rotulo': '',
  'eessEconomicas': false,
  'conPlanesDescuento': false,
  'horarioInicial': null,
  'horarioFinal': null,
  'calle': '',
  'numero': '',
  'codPostal': '',
  'tipoVenta': null,
  'idOperador': null,
  'nombrePlan': '',
  'idTipoDestinatario': null
}

const piozStationsRequestBody = {
  'tipoEstacion': 'EESS',
  'idProvincia': '19',
  'idMunicipio': 20506,
  'idProducto': 4,
  'rotulo': '',
  'eessEconomicas': false,
  'conPlanesDescuento': false,
  'horarioInicial': null,
  'horarioFinal': null,
  'calle': '',
  'numero': '',
  'codPostal': '',
  'tipoVenta': null,
  'idOperador': null,
  'nombrePlan': '',
  'idTipoDestinatario': null
}

function sortByPrice (left, right) {
  return left.price - right.price
}

function filterFavouritesInAlcala (stationRecord) {
  const favourites = [
    3079, // Alcampo
    2929, // Galp cerca del Alcampo
    3067, // Galp Villamalea
    4698, // Galp NII
    4697, // Galp Mercadona Meco
    12721 // Galp rotonda Fiesta
  ]

  return favourites.includes(stationRecord.station.id)
}

function filterFavouritesInGuadalajara (stationRecord) {
  const favourites = [
    8292 // Galp en rotonda de la bici
  ]

  return favourites.includes(stationRecord.station.id)
}

function filterFavouritesInPioz (stationRecord) {
  const favourites = [
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

axios.post(targetUrl, alcalaStationsRequestBody)
  .then(response => response.data)
  .then(data => {
    console.log('Estaciones de Pioz')
    return data
  })
  .then(data => data.estaciones.map(StationRecord.fromRequest))
  .then(stations => stations.sort(sortByPrice))
  .then(stations => stations.filter(filterFavouritesInAlcala))
  .then(log)
  .catch(error => {
    console.log('error', error)
  })

axios.post(targetUrl, guadaStationsRequestBody)
  .then(response => response.data)
  .then(data => {
    console.log('Estaciones de Guada')
    return data
  })
  .then(data => data.estaciones.map(StationRecord.fromRequest))
  .then(stations => stations.sort(sortByPrice))
  .then(stations => stations.filter(filterFavouritesInGuadalajara))
  .then(log)
  .catch(error => {
    console.log('error', error)
  })

axios.post(targetUrl, piozStationsRequestBody)
  .then(response => response.data)
  .then(data => {
    console.log('Estaciones de Pioz')
    return data
  })
  .then(data => data.estaciones.map(StationRecord.fromRequest))
  .then(stations => stations.sort(sortByPrice))
  .then(stations => stations.filter(filterFavouritesInPioz))
  .then(log)
  .catch(error => {
    console.log('error', error)
  })
