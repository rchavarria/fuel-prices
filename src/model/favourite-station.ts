/**
 * Minimum information to identify a favourite station
 */
export default class FavouriteStation {
  constructor (
    // must match a geoportalgasolineras station
    public readonly id: number,
    // text to recognize the station as a human
    public readonly label: string
  ) {
  }
}
