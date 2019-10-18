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

const axios = require('axios')

function sortByPrice (left, right) {
  return left.precio - right.precio
}

axios.post(targetUrl, body)
  .then(response => response.data)
  .then(data => data.estaciones)
  .then(stations => {
    const sorted = stations.sort(sortByPrice)
    console.log('Hay', stations.length, 'estaciones')

    sorted.forEach(station => {
      console.log('Estación', station.estacion.rotulo, 'en', station.estacion.direccion, 'tiene un precio de', station.precio)
    })
  })
  .catch(error => {
    console.log('error', error)
  })
