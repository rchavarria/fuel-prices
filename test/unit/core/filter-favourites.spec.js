/* eslint-env jasmine */
import filterFavourites from '../../../src/core/filter-favourites'

describe('filterFavourites', () => {
  const fakeStations = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ]

  it('works with empty lists', () => {
    const filtered = filterFavourites([], [])
    expect(filtered).toBeDefined()
  })

  it('removes all stations if there are no favourites', () => {
    const filtered = filterFavourites(fakeStations, [])
    expect(filtered).toHaveLength(0)
  })
})
