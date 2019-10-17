const targetUrl = 'https://geoportalgasolineras.es/rest/busquedaEstaciones'
const body = {
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

const axios = require('axios')

axios.post(targetUrl, body)
  .then(response => response.data)
  .then(data => {
    const stations = data.estaciones
    console.log('hay estas estaciones', stations.length)
    console.log('una estación tiene estas propiedades', Object.keys(stations[0]))
  })
  .catch(error => {
    console.log('error', error)
  })
