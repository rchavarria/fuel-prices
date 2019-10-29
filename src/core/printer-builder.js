import render from './render'
import TemplateParam from '../model/template-param'

const titleTemplate = `Hay {length} estaciones`
const stationLineTemplate = `({id}) Estación "{label}" en {address} tiene un precio de {price}€`

export default function (logger) {
  return function (stations) {
    const titleParams = [
      new TemplateParam('length', stations.length)
    ]

    const lines = stations.map(station => {
      const stationLineParams = [
        new TemplateParam('id', station.id),
        new TemplateParam('label', station.label),
        new TemplateParam('address', station.address),
        new TemplateParam('price', station.price)
      ]

      return render(stationLineTemplate, stationLineParams)
    })

    logger.log(render(titleTemplate, titleParams))
    lines.forEach(logger.log)
  }
}
