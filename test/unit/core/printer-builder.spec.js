/* eslint-env jest */
import printerBuilder from '../../../src/core/printer-builder'

describe('printerBuilder', () => {
  let messages
  let fakeLogger
  let printer
  const fakeStations = [
    { price: 150, station: { id: 1, label: 'station#1', address: 'address#1' } },
    { price: 100, station: { id: 1, label: 'station#2', address: 'address#2' } },
    { price: 500, station: { id: 1, label: 'station#3', address: 'address#3' } },
    { price: 900, station: { id: 1, label: 'station#4', address: 'address#4' } },
    { price: 200, station: { id: 1, label: 'station#5', address: 'address#5' } }
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
    expect(fakeLogger.log.mock.calls).toHaveLength(1 + fakeStations.length, 'header + station lines')
  })

  it('logs a header line', () => {
    printer(fakeStations)
    expect(messages[0]).toContain(fakeStations.length.toString())
  })

  it('logs lines with information about stations', () => {
    printer(fakeStations)

    const firstStationLine = messages[1]
    const firstStation = fakeStations[0]
    expect(firstStationLine).toContain(firstStation.station.id.toString())
    expect(firstStationLine).toContain(firstStation.station.label)
    expect(firstStationLine).toContain(firstStation.station.address)
    expect(firstStationLine).toContain(firstStation.price.toString())
  })
})
