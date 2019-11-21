import StationRecord from '../model/geoportal/station-record'

export default function (restClient) {
  return function () {
    return restClient.post()
      .then(response => response.data)
      .then(data => data.estaciones.map(StationRecord.fromRequest))
  }
}
