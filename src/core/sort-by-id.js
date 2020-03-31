/**
 * Sort stations by id
 *
 * @param stations {array} List of Station to sort
 *
 * @returns {array} Sorted list of Station by id
 */
export default function sortById (stations) {
  return stations.sort((left, right) => left.id - right.id)
}
