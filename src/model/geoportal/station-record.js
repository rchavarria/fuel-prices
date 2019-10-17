import Station from './station'

export default class StationRecord {
  constructor () {
    this.id = 0
    this.precio = 0.0
    this.estacion = new Station()
    this.producto = null
    this.favorita = false
  }
}
