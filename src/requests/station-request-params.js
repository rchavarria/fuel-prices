export default class StationRequestParams {
  static fromId (id) {
    const request = new StationRequestParams()

    request.idProvincia = id.province
    request.idMunicipio = id.city

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
