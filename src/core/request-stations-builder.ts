import StationRequestParams from '../model/geoportal/station-request-params'
import StationMapper from '../model/geoportal/station-mapper'
import CityId from "../requests/city-id";
import {AxiosStatic} from "axios";

/**
 * Use the REST client to ask for all stations for a city (given the cityId)
 *
 * @param restClient
 * @param dataURL {string} URL to request data
 *
 * @returns {function(string): Promise<T>}
 */
export default function (restClient: AxiosStatic, dataURL: string) {
  return function (cityId: CityId) {
    const mapper = new StationMapper()
    return restClient
      .post(dataURL, StationRequestParams.fromCity(cityId))
      .then(response => response.data)
      .then(mapper.mapAll)
  }
}
