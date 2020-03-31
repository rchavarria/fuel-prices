/* eslint-env jest */
import sortById from '../../../src/core/sort-by-id'

describe('sortById', () => {
  let sorted
  const fakeStations = [
    { id: 10, price: 150 },
    { id: 5, price: 100 },
    { id: 33, price: 500 },
    { id: 54, price: 900 },
    { id: 15, price: 200 }
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
