/**
 * Mandatory params to make requests to geoportalgasolineras
 */
export default class StationRequestParams {
  /**
   * Builds params for a given city
   *
   * @param city {CityId}
   *
   * @returns {StationRequestParams}
   */
  static fromCity (city) {
    const request = new StationRequestParams()

    request.idProvincia = city.province
    request.idMunicipio = city.city

    return request
  }

  constructor () {
    // non-constant request params
    this.idProvincia = undefined
    this.idMunicipio = undefined

    // default request params
    this.tipoEstacion = 'EESS'
    this.idProducto = 4
    this.rotulo = ''
    this.eessEconomicas = false
    this.conPlanesDescuento = false
    this.horarioInicial = null
    this.horarioFinal = null
    this.calle = ''
    this.numero = ''
    this.codPostal = ''
    this.tipoVenta = null
    this.idOperador = null
    this.nombrePlan = ''
    this.idTipoDestinatario = null
  }
}
