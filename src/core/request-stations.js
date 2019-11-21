import axios from 'axios'
import StationRequestParams from '../model/geoportal/station-request-params'
import StationRecord from '../model/geoportal/station-record'

const targetUrl = 'https://geoportalgasolineras.es/rest/busquedaEstaciones'

export default function (cityId) {
  return axios.post(targetUrl, StationRequestParams.fromCity(cityId))
    .then(response => response.data)
    .then(data => data.estaciones.map(StationRecord.fromRequest))
}
