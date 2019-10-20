export default class StationRequestParams {
  static build (province, city) {
    const request = new StationRequestParams()

    request.idProvincia = province
    request.idMunicipio = city

    return request
  }

  constructor () {
    // non-constant request params
    this.idProvincia = ''
    this.idMunicipio = 0

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
