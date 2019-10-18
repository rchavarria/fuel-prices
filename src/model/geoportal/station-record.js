import Station from './station'

export default class StationRecord {
  /**
   * Maps objects parsed from a request to an object belonging the application domain
   *
   * @param requestData
   *
   * @returns {StationRecord}
   */
  static fromRequest (requestData) {
    const record = new StationRecord()

    record.id = requestData.id
    record.price = requestData.precio
    record.product = requestData.producto
    record.favourite = requestData.favorita
    record.station = Station.fromRequest(requestData.estacion)

    return record
  }

  constructor () {
    this.id = 0
    this.price = 0.0
    this.product = null
    this.favourite = false
    this.station = new Station()
  }
}
