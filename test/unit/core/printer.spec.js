/* eslint-env jest */
import printer from '../../../src/core/printer'

describe('printer', () => {
  const fakeStations = [
    { id: 1, price: 150 },
    { id: 2, price: 100 },
    { id: 3, price: 500 },
    { id: 4, price: 900 },
    { id: 5, price: 200 }
  ]

  beforeEach(() => {
  })

  it('logs some messages', () => {
    const fakeLogger = {
      log: jest.fn()
    }
    const builder = printer(fakeLogger)
    builder(fakeStations)

    expect(fakeLogger.log).toBeCalled()
  })

  it('logs a header line', () => {
    const messages = []
    const fakeLogger = {
      log: jest.fn(msg => messages.push(msg))
    }

    const builder = printer(fakeLogger)

    builder(fakeStations)

    expect(messages).toHaveLength(1)
    expect(messages[0]).toContain(fakeStations.length.toString())
  })
})
