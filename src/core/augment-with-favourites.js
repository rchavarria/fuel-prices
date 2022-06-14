/**
 * Given a list of stations and favourites, it matches them by `id` and replaces station's description
 * with favourite's label in order to being able to better recognize the station when displaying
 * the report with the list of stations
 *
 * @param favourites
 *
 * @returns function Function accepting a list of stations
 */
export default function augmentWithFavourites (favourites) {
  return function (stationRecords) {
    const copy = stationRecords.map(s => Object.assign({}, s))

    favourites.forEach(favourite => {
      const found = copy.findIndex(station => station.id === favourite.id)
      if (found >= 0) {
        copy[found].description = favourite.label
      }
    })

    return copy
  }
}
