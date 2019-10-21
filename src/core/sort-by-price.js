/**
 * Sort stations by fuel price
 *
 * @param stations {array} List of StationRecord to sort
 *
 * @returns {array} Sorted list of StationRecord by price
 */
export default function sortByPrice (stations) {
  return stations.sort((left, right) => left.price - right.price)
}
