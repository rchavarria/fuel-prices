import CityId from "../../requests/city-id";

/**
 * Station information
 */
export default class Station {
  public id: number;
  public price: number;
  public label: string;
  public address: string;
  public city: string;
  public priceDate: Date;
  public description: string;

  constructor () {
    this.id = 0
    this.price = 0.0
    this.label = null
    this.address = null
    this.city = null
    this.priceDate = null
    this.description = null
  }
}
