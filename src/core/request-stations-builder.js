import { STATIONS_URL } from './stations-url'
import StationRecord from '../model/geoportal/station-record'
import StationRequestParams from '../model/geoportal/station-request-params'

export default function (restClient) {
  return function (cityId) {
    return restClient.post(STATIONS_URL, StationRequestParams.fromCity(cityId))
      .then(response => response.data)
      .then(data => data.estaciones.map(StationRecord.fromRequest))
  }
}
