import augmentWithFavourites from './augment-with-favourites'
import FavouriteStation from '../model/favourite-station'

function buildStation (id) {
  return { id }
}

describe('augmentWithFavourites', () => {
  let fakeStationRecords
  const fakeFavourites = [
    new FavouriteStation(2, 'Desc #2'),
    new FavouriteStation(3, 'D3sc #3'),
    new FavouriteStation(99, '#abc')
  ]

  beforeEach(() => {
    fakeStationRecords = [
      buildStation(1),
      buildStation(2),
      buildStation(3),
      buildStation(4),
      buildStation(5)
    ]
  })

  it('works with empty lists', () => {
    const augmented = augmentWithFavourites([])([])
    expect(augmented).toBeDefined()
  })

  it('modifies no stations when there are no favourites', () => {
    const augmented = augmentWithFavourites([])(fakeStationRecords)
    augmented.forEach(station => {
      expect(station.description).not.toBeDefined()
    })
  })

  it('modifies those stations present in favourites', () => {
    const augmented = augmentWithFavourites(fakeFavourites)(fakeStationRecords)

    expect(augmented[1].description).toEqual(fakeFavourites[0].label)
    expect(augmented[2].description).toEqual(fakeFavourites[1].label)
  })
})
