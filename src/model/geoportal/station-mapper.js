import MyStation from './my-station'

export default class StationMapper {
  mapAll (responseData) {
    if (!responseData) {
      return []
    }

    return responseData.estaciones.map(responseStation => {
      const station = new MyStation()

      station.id = responseStation.estacion.id

      return station
    })
  }
}
