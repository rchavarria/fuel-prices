import Station from '../model/station';
import printerBuilder from './printer-builder'

function buildStation (id, price): Station {
  const station = new Station()

  station.id = id
  station.price = price
  station.label = `station #${id}`
  station.address = `address #${id}`

  return station
}

describe('printerBuilder', () => {
  let messages
  let fakeLogger
  let printer
  const fakeStations = [
    buildStation(1, 150),
    buildStation(2, 100),
    buildStation(3, 500),
    buildStation(4, 900),
    buildStation(5, 200)
  ]

  beforeEach(() => {
    messages = []
    fakeLogger = {
      log: jest.fn(msg => messages.push(msg))
    }
    printer = printerBuilder(fakeLogger)
  })

  it('logs some messages', () => {
    printer(fakeStations)
    expect(fakeLogger.log).toBeCalled()
    expect(fakeLogger.log.mock.calls).toHaveLength(1 + fakeStations.length) // header + station lines
  })

  it('logs a header line', () => {
    printer(fakeStations)
    expect(messages[0]).toContain(fakeStations.length.toString())
  })

  it('logs lines with information about stations', () => {
    printer(fakeStations)

    const firstStationLine = messages[1]
    const firstStation = fakeStations[0]
    expect(firstStationLine).toContain(firstStation.id.toString())
    expect(firstStationLine).toContain(firstStation.label)
    expect(firstStationLine).toContain(firstStation.address)
    expect(firstStationLine).toContain(firstStation.price.toString())
  })
})
