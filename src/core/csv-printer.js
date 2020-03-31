/**
 * Saves the data about fuel prices to a CSV file, appending the data.
 *
 * Data is expected to be sorted by station id, descending order
 *
 * @returns {function([*])}
 */
export default function (logger) {
  return function (stations) {
    const now = new Date()

    const prices = stations.reduce((line, station) => {
      return line + ';' + station.price
    }, now.toISOString())

    logger.log(prices)
  }
}
