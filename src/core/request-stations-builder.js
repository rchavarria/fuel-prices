import Config from '../config/config'
import StationRequestParams from '../model/geoportal/station-request-params'
import StationMapper from '../model/geoportal/station-mapper'

/**
 * Use the REST client to ask for all stations for a city (given the cityId)
 *
 * @param restClient
 *
 * @returns {function(string): Promise<T>}
 */
export default function (restClient) {
  return function (cityId) {
    const mapper = new StationMapper()
    return restClient.post(Config.STATIONS_URL, StationRequestParams.fromCity(cityId))
      .then(response => response.data)
      .then(mapper.mapAll)
  }
}
