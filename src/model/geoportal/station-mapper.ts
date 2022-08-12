import Station from './station'

/**
 * See complete response on `doc/responses.md`
 */
interface IStationListResponse {
  estaciones: IStationResponse[];
}

/**
 * See complete response on `doc/responses.md`
 */
interface IStationResponse {
  id: number;
  precio: number;
  estacion: {
    id: number;
    rotulo: string;
    direccion: string;
    localidad: string;
    fechaPvp: string;
  }
}

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
  station.priceDate = new Date(responseStation.estacion.fechaPvp)

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
