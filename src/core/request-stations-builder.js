import Config from '../config/config'
import StationRequestParams from '../model/geoportal/station-request-params'
import StationMapper from '../model/geoportal/station-mapper'

export default function (restClient) {
  return function (cityId) {
    const mapper = new StationMapper()
    return restClient.post(Config.STATIONS_URL, StationRequestParams.fromCity(cityId))
      .then(response => response.data)
      .then(mapper.mapAll)
  }
}
