import Station from '../model/geoportal/station'

/**
 * Sort stations by fuel price
 *
 * @param stations {array} List of Station to sort
 *
 * @returns {array} Sorted list of Station by price
 */
export default function sortByPrice (stations: Station[]) {
  return stations.sort((left, right) => left.price - right.price)
}
