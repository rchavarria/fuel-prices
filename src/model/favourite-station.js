/**
 * Minimum information to identify a favourite station
 */
export default class FavouriteStation {
  constructor (id, label) {
    // must match a geoportalgasolineras station
    this.id = id
    // text to recognize the station as a human
    this.label = label
  }
}
