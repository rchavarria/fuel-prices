export default function (logger) {
  return function (stations) {
    logger.log(`Hay ${stations.length} estaciones`)

    stations.forEach(station => {
      logger.log(`(${station.id}) Estación "${station.label}" en ${station.address} tiene un precio de ${station.price}€`)
    })
  }
}
