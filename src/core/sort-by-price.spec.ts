import sortByPrice from './sort-by-price'
import Station from '../model/geoportal/station'

describe('sortByPrice', () => {
  let sorted
  const fakeStations = [
    { id: 1, price: 150 } as Station,
    { id: 2, price: 100 } as Station,
    { id: 3, price: 500 } as Station,
    { id: 4, price: 900 } as Station,
    { id: 5, price: 200 } as Station,
  ]

  beforeEach(() => {
    sorted = sortByPrice(fakeStations)
  })

  it('sorts from lower to upper prices', () => {
    expect(sorted[0].price).toEqual(100)
    expect(sorted[sorted.length - 1].price).toEqual(900)
  })

  it('does not delete or adds any station', () => {
    expect(sorted.length).toEqual(fakeStations.length)
  })
})
