/* eslint-env jasmine */
import sortByPrice from '../../../src/core/sort-by-price'

describe('sortByPrice', () => {
  let sorted
  const fakeStations = [
    { id: 1, price: 150 },
    { id: 2, price: 100 },
    { id: 3, price: 500 },
    { id: 4, price: 900 },
    { id: 5, price: 200 }
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
