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

  it('selects no stations if there are no favourites', () => {
    const filtered = filterFavourites(fakeStations, [])
    expect(filtered).toHaveLength(0)
  })

  it('selects only those from favourites', () => {
    const filtered = filterFavourites(fakeStations, fakeFavourites)
    expect(filtered).toHaveLength(fakeFavourites.length)
    expect(filtered[0].id).toEqual(fakeFavourites[0].id)
  })

  it('selects from favourites that are present in stations', () => {
    const extendedFakeFavourites = fakeFavourites.concat({ id: 99 })
    const filtered = filterFavourites(fakeStations, extendedFakeFavourites)
    expect(filtered).toHaveLength(fakeFavourites.length)
    expect(filtered[1].id).toEqual(fakeFavourites[1].id)
  })
})
