export default function filterFavourites (favourites) {
  return function (stationRecords) {
    const favouriteIds = favourites.map(f => f.id)
    return stationRecords.filter(record => favouriteIds.includes(record.station.id))
  }
}
