import sortById from './sort-by-id'
import Station from '../model/geoportal/station'

describe('sortById', () => {
  let sorted
  const fakeStations = [
    { id: 10, price: 150 } as Station,
    { id: 5, price: 100 } as Station,
    { id: 33, price: 500 } as Station,
    { id: 54, price: 900 } as Station,
    { id: 15, price: 200 } as Station,
  ]

  beforeEach(() => {
    sorted = sortById(fakeStations)
  })

  it('sorts from lower to upper ids', () => {
    expect(sorted[0].id).toEqual(5)
    expect(sorted[sorted.length - 1].id).toEqual(54)
  })

  it('does not delete or adds any station', () => {
    expect(sorted.length).toEqual(fakeStations.length)
  })
})
