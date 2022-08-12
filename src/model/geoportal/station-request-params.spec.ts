import CityId from '../../requests/city-id'
import StationRequestParams from './station-request-params'

describe('StationRequestParams', () => {
  const province = '28'
  const city = 123431

  it('must be created from the named constructor', () => {
    const params = StationRequestParams.fromCity(new CityId(province, city))
    expect(params.idProvincia).toEqual(province)
    expect(params.idMunicipio).toEqual(city)
  })
})
