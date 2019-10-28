export default function (logger) {
  return function (stations) {
    logger.log(`Hay ${stations.length} estaciones`)

    stations.forEach(station => {
      logger.log(station.price)
    })
  }
}
