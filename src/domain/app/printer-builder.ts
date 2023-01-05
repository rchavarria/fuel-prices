import Station from '../model/station';
import TemplateParam from '../model/template-param';
import {ILogger} from './ILogger'
import render from './render';

const titleTemplate = `Hay {length} estaciones`
const stationLineTemplate = `{price}€ en la estación "{description}", {id}, {label} en {address}`

/**
 * Creates the title
 *
 * @param stations {[*]}
 *
 * @returns {string}
 */
function renderTitle (stations: Station[]) {
  const titleParams = [
    new TemplateParam('length', stations.length.toString())
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
function renderLines (stations: Station[]): string[] {
  return stations.map((stationRecord: Station): string => {
    const stationLineParams = [
      new TemplateParam('id', stationRecord.id.toString()),
      new TemplateParam('label', stationRecord.label),
      new TemplateParam('address', stationRecord.address),
      new TemplateParam('price', stationRecord.price.toFixed(3)),
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
export default function (logger: ILogger) {
  return function (stations: Station[]) {
    const title = renderTitle(stations)
    const lines = renderLines(stations)

    const everything = [ title, ...lines ]
    everything.forEach(line => logger.log(line))
  }
}
