export default function filterFavourites (stations, favourites) {
  const favouriteIds = favourites.map(f => f.id)
  return stations.filter(station => favouriteIds.includes(station.id))
}
