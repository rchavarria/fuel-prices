/**
 * Holds information about the city to ask station's information for that city
 */
export default class CityId {
  constructor (
    public readonly province: string,
    public readonly city: number
  ) {
  }
}
