import {IStationListResponse} from '../../responses/station-list-response';
import {IStationResponse} from '../../responses/station-response';
import Station from './station'

/**
 * Extracts information from geoportalgasoliners API to build
 * an Station
 *
 * @param responseStation {*}
 *
 * @returns {Station}
 */
function eachStation (responseStation: IStationResponse) {
  const station = new Station()

  station.id = responseStation.estacion.id
  station.price = responseStation.precio
  station.label = responseStation.estacion.rotulo
  station.address = responseStation.estacion.direccion
  station.city = responseStation.estacion.localidad
  station.priceDate = responseStation.estacion.fechaPvp

  return station
}

/**
 * Converts data from geoportalgasolineras into data on our own
 */
export default class StationMapper {
  mapAll (responseData: IStationListResponse) {
    if (!responseData) {
      return []
    }

    return responseData.estaciones.map(eachStation)
  }
}
