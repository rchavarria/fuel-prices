import Station from './station'

function eachStation (responseStation) {
  const station = new Station()

  station.id = responseStation.estacion.id
  station.price = responseStation.precio
  station.label = responseStation.estacion.rotulo
  station.address = responseStation.estacion.direccion
  station.city = responseStation.estacion.localidad
  station.priceDate = responseStation.estacion.fechaPvp

  return station
}

export default class StationMapper {
  mapAll (responseData) {
    if (!responseData) {
      return []
    }

    return responseData.estaciones.map(eachStation)
  }
}
