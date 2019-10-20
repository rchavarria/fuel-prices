/* eslint-env jasmine */
import CityId from '../../../../src/requests/city-id'
import StationRequestParams from '../../../../src/model/geoportal/station-request-params'

describe('StationRequestParams', () => {
  const province = '28'
  const city = 123431

  it('has no province nor city if created directly', () => {
    const params = new StationRequestParams()
    expect(params.idProvincia).toBeUndefined()
    expect(params.idMunicipio).toBeUndefined()
  })

  it('must be created from the named constructor', () => {
    const params = StationRequestParams.fromCity(new CityId(province, city))
    expect(params.idProvincia).toEqual(province)
    expect(params.idMunicipio).toEqual(city)
  })
})
