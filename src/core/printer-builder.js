import render from './render'
import TemplateParam from '../model/template-param'

const titleTemplate = `Hay {length} estaciones`
const stationLineTemplate = `({id}) Estación "{label}" en {address} tiene un precio de {price}€`

export default function (logger) {
  return function (stations) {
    const titleParams = [
      new TemplateParam('length', stations.length)
    ]

    const lines = stations.map(stationRecord => {
      const stationLineParams = [
        new TemplateParam('id', stationRecord.station.id),
        new TemplateParam('label', stationRecord.station.label),
        new TemplateParam('address', stationRecord.station.address),
        new TemplateParam('price', stationRecord.price)
      ]

      return render(stationLineTemplate, stationLineParams)
    })

    logger.log(render(titleTemplate, titleParams))
    lines.forEach(line => logger.log(line))
  }
}
