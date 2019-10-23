export default function filterFavourites (stationRecords, favourites) {
  const favouriteIds = favourites.map(f => f.id)
  return stationRecords.filter(record => favouriteIds.includes(record.station.id))
}
