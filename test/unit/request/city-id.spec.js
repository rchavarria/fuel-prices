/* eslint-env jasmine */
import CityId from '../../../src/requests/city-id'

describe('CityId', () => {
  const province = '28'
  const city = 123431

  it('can be created', () => {
    expect(new CityId(province, city)).not.toBeUndefined()
  })
})
