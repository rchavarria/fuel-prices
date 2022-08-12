import csvPrinter from './csv-printer'
import Station from '../model/geoportal/station'

function buildStation (id, price) {
  const station = new Station()

  station.id = id
  station.price = price

  return station
}

describe('printerBuilder', () => {
  let messages
  let fakeLogger
  let printer
  const fakeStations = [
    buildStation(1, 150),
    buildStation(2, 100),
    buildStation(3, 500)
  ]

  beforeEach(() => {
    messages = []
    fakeLogger = {
      log: jest.fn(msg => messages.push(msg))
    }
    printer = csvPrinter(fakeLogger)
  })

  it('logs just one message', () => {
    printer(fakeStations)
    expect(fakeLogger.log).toBeCalled()
    expect(fakeLogger.log.mock.calls).toHaveLength(1)
    expect(messages).toHaveLength(1)
  })

  it('logs a line with the date and as many stations as passed in', () => {
    printer(fakeStations)

    const lineParts = messages[0].split(';')
    expect(lineParts).toHaveLength(1 + fakeStations.length) // date + n stations
  })
})
