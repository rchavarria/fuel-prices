export default class Station {
  /**
   * Maps objects parsed from a request to an object belonging the application domain
   *
   * @param requestData
   *
   * @returns {StationRecord}
   */
  static fromRequest (requestData) {
    const station = new Station()

    station.id = requestData.id
    station.label = requestData.rotulo
    station.address = requestData.direccion
    station.city = requestData.municipio
    station.priceDate = requestData.fechaPvp
    station.favourite = requestData.favorita
    station.rating = requestData.valoracion

    return station
  }

  constructor () {
    this.id = 0
    this.rotulo = 'rotulo'
    this.direccion = 'direccion'
    this.municipio = 'municipio'
    this.fechaPvp = new Date()
    this.favorita = false
    this.valoracion = 0
  }
}
