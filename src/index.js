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

function requestStations (requestParams) {
  return axios.post(targetUrl, requestParams)
    .then(response => response.data)
    .then(data => data.estaciones.map(StationRecord.fromRequest))
}

Promise.all([
  requestStations(alcalaStationsRequestBody),
  requestStations(guadaStationsRequestBody),
  requestStations(piozStationsRequestBody)
])
  .then(allStations => allStations.flat())
  .then(stations => stations.sort(sortByPrice))
  .then(stations => stations.filter(filterFavourites))
  .then(log)
  .catch(error => {
    console.log('error', error)
  })
