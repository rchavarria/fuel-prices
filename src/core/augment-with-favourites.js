export default function augmentWitFavourites (favourites) {
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
