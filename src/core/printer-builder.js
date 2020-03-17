import render from './render'
import TemplateParam from '../model/template-param'

const titleTemplate = `Hay {length} estaciones`
const stationLineTemplate = `{price}€ en la estación "{description}", {id}, {label} en {address}`

/**
 * Creates the title
 *
 * @param stations {[*]}
 *
 * @returns {string}
 */
function renderTitle (stations) {
  const titleParams = [
    new TemplateParam('length', stations.length)
  ]

  return render(titleTemplate, titleParams)
}

/**
 * Creates one line for each station
 *
 * @param stations {[*]}
 *
 * @returns {[string]}
 */
function renderLines (stations) {
  return stations.map(stationRecord => {
    const stationLineParams = [
      new TemplateParam('id', stationRecord.id),
      new TemplateParam('label', stationRecord.label),
      new TemplateParam('address', stationRecord.address),
      new TemplateParam('price', stationRecord.price),
      new TemplateParam('description', stationRecord.description)
    ]

    return render(stationLineTemplate, stationLineParams)
  })
}

/**
 * Logs output information based on some templates
 *
 * @param logger
 *
 * @returns {function([*])}
 */
export default function (logger) {
  return function (stations) {
    const title = renderTitle(stations)
    const lines = renderLines(stations)

    const everything = [ title ].concat(lines)
    everything.forEach(line => logger.log(line))
  }
}
