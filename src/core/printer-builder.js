import render from './render'
import TemplateParam from '../model/template-param'

const titleTemplate = `Hay {length} estaciones`
const stationLineTemplate = `{price}€ en la estación "{description}", {id}, {label} en {address}`

/**
 * Logs output information based on some templates
 *
 * @param logger
 *
 * @returns {function([*])}
 */
export default function (logger) {
  return function (stations) {
    const titleParams = [
      new TemplateParam('length', stations.length)
    ]

    const lines = stations.map(stationRecord => {
      const stationLineParams = [
        new TemplateParam('id', stationRecord.id),
        new TemplateParam('label', stationRecord.label),
        new TemplateParam('address', stationRecord.address),
        new TemplateParam('price', stationRecord.price),
        new TemplateParam('description', stationRecord.description)
      ]

      return render(stationLineTemplate, stationLineParams)
    })

    logger.log(render(titleTemplate, titleParams))
    lines.forEach(line => logger.log(line))
  }
}
