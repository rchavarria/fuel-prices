/* eslint-env jest */
import printerBuilder from '../../../src/core/printer-builder'

describe('printerBuilder', () => {
  let messages
  let fakeLogger
  let printer
  const fakeStations = [
    { id: 1, price: 150 },
    { id: 2, price: 100 },
    { id: 3, price: 500 },
    { id: 4, price: 900 },
    { id: 5, price: 200 }
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
    expect(firstStationLine).toContain(firstStation.id.toString())
    expect(firstStationLine).toContain(firstStation.label)
    expect(firstStationLine).toContain(firstStation.address)
    expect(firstStationLine).toContain(firstStation.price.toString())
  })
})
