import filterFavourites from './filter-favourites'
import Station from '../model/geoportal/station'
import FavouriteStation from '../model/favourite-station'

function buildStation (id): Station {
  return { id } as Station
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
    { id: 2 } as FavouriteStation,
    { id: 3 } as FavouriteStation,
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
    const anotherFavourite = { id: 99 } as FavouriteStation
    const filtered = filterFavourites([...fakeFavourites, anotherFavourite])(fakeStationRecords)
    expect(filtered).toHaveLength(fakeFavourites.length)
    expect(filtered[1].id).toEqual(fakeFavourites[1].id)
  })
})
