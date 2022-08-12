import CityId from './city-id'

describe('CityId', () => {
  const province = '28'
  const city = 123431

  it('can be created', () => {
    expect(new CityId(province, city)).not.toBeUndefined()
  })

  it('sets "province" correctly', () => {
    const id = new CityId(province, city)
    expect(id.province).toEqual(province)
  })

  it('sets "city" correctly', () => {
    const id = new CityId(province, city)
    expect(id.city).toEqual(city)
  })
})
