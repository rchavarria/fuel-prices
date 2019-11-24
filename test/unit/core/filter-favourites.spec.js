/* eslint-env jasmine */
import filterFavourites from '../../../src/core/filter-favourites'

function buildStation (id) {
  return { id }
}

describe('filterFavourites', () => {
  const fakeStationRecords = [
    buildStation(1),
    buildStation(2),
    buildStation(3),
    buildStation(4),
    buildStation(5)
  ]
  const fakeFavourites = [
    { id: 2 },
    { id: 3 }
  ]

  it('works with empty lists', () => {
    const filtered = filterFavourites([])([])
    expect(filtered).toBeDefined()
  })

  it('selects no stations if there are no favourites', () => {
    const filtered = filterFavourites([])(fakeStationRecords)
    expect(filtered).toHaveLength(0)
  })

  it('selects only those from favourites', () => {
    const filtered = filterFavourites(fakeFavourites)(fakeStationRecords)
    expect(filtered).toHaveLength(fakeFavourites.length)
    expect(filtered[0].id).toEqual(fakeFavourites[0].id)
  })

  it('selects from favourites that are present in stations', () => {
    const extendedFakeFavourites = fakeFavourites.concat({ id: 99 })
    const filtered = filterFavourites(extendedFakeFavourites)(fakeStationRecords)
    expect(filtered).toHaveLength(fakeFavourites.length)
    expect(filtered[1].id).toEqual(fakeFavourites[1].id)
  })
})
