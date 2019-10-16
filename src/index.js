console.log('Hook index.js')

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

fetch(targetUrl, {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
  .then(res => res.json())
  .then(res => console.log('result:', res))
