// const axios = require('axios')
import axios from 'axios'
import StationRecord from './model/geoportal/station-record'

const targetUrl = 'https://geoportalgasolineras.es/rest/busquedaEstaciones'
const body = {
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

function sortByPrice (left, right) {
  return left.price - right.price
}

axios.post(targetUrl, body)
  .then(response => response.data)
  .then(data => data.estaciones.map(StationRecord.fromRequest))
  .then(stations => {
    const sorted = stations.sort(sortByPrice)
    console.log('Hay', stations.length, 'estaciones')

    sorted.forEach(station => {
      console.log('Estación', station.station.label, 'en', station.station.address, 'tiene un precio de', station.price)
    })
  })
  .catch(error => {
    console.log('error', error)
  })
