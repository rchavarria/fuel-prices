import CityId from "../../requests/city-id"

/**
 * Mandatory params to make requests to geoportalgasolineras
 */
export default class StationRequestParams {
  // default request params
  public readonly tipoEstacion = 'EESS';
  public readonly idProducto = 4;
  public readonly rotulo = '';
  public readonly eessEconomicas = false;
  public readonly conPlanesDescuento = false;
  public readonly horarioInicial = null;
  public readonly horarioFinal = null;
  public readonly calle = '';
  public readonly numero = '';
  public readonly codPostal = '';
  public readonly tipoVenta = null;
  public readonly idOperador = null;
  public readonly nombrePlan = '';
  public readonly idTipoDestinatario = null;

  /**
   * Builds params for a given city
   *
   * @param city
   */
  static fromCity (city: CityId): StationRequestParams {
    return new StationRequestParams(city.province, city.city)
  }

  constructor (
    public readonly idProvincia: string,
    public readonly idMunicipio: number,
  ) {
  }

}
