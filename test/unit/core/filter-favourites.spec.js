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
  const fakeFavourites = [
    { id: 2 },
    { id: 3 }
  ]

  it('works with empty lists', () => {
    const filtered = filterFavourites([], [])
    expect(filtered).toBeDefined()
  })

  it('removes all stations if there are no favourites', () => {
    const filtered = filterFavourites(fakeStations, [])
    expect(filtered).toHaveLength(0)
  })

  it('removes all from favourites', () => {
    const filtered = filterFavourites(fakeStations, fakeFavourites)
    expect(filtered).toHaveLength(fakeStations.length - fakeFavourites.length)
    expect(filtered[2].id).toEqual(fakeStations[4].id)
  })
})
