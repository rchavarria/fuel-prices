/**
 * Given a list of favourite stations and a list of stations, filter those stations
 * that are present in the favourite list
 *
 * @param favourites
 *
 * @returns {function([]): []} Filters the given list of stations
 */
export default function filterFavourites (favourites) {
  return function (stationRecords) {
    const favouriteIds = favourites.map(f => f.id)
    return stationRecords.filter(record => favouriteIds.includes(record.id))
  }
}
