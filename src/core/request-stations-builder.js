import StationRecord from '../model/geoportal/station-record'
import { STATIONS_URL } from './stations-url'

export default function (restClient) {
  return function (cityId) {
    return restClient.post(STATIONS_URL, cityId)
      .then(response => response.data)
      .then(data => data.estaciones.map(StationRecord.fromRequest))
  }
}
