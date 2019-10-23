/* eslint-env jasmine */
import filterFavourites from '../../../src/core/filter-favourites'

function buildStationRecord (id) {
  return {
    station: {
      id: id
    }
  }
}

describe('filterFavourites', () => {
  const fakeStationRecords = [
    buildStationRecord(1),
    buildStationRecord(2),
    buildStationRecord(3),
    buildStationRecord(4),
    buildStationRecord(5)
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
    expect(filtered[0].station.id).toEqual(fakeFavourites[0].id)
  })

  it('selects from favourites that are present in stations', () => {
    const extendedFakeFavourites = fakeFavourites.concat({ id: 99 })
    const filtered = filterFavourites(extendedFakeFavourites)(fakeStationRecords)
    expect(filtered).toHaveLength(fakeFavourites.length)
    expect(filtered[1].station.id).toEqual(fakeFavourites[1].id)
  })
})
