import MyStation from './my-station'

export default class StationMapper {
  map (responseData) {
    if (!responseData) {
      return []
    }

    return responseData.estaciones.map(responseStation => new MyStation())
  }
}
