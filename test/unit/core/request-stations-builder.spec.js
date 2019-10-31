/* eslint-env jest */
import requestStationsBuilder from '../../../src/core/request-stations-builder'

describe('requestStationsBuilder', () => {
  let requestStations

  beforeEach(() => {
    requestStations = requestStationsBuilder(null)
  })

  it('creates a function', () => {
    expect(typeof requestStations).toEqual('function')
  })

  it('accepts a rest client as parameter and uses it', () => {
    const fakeAxios = {
      post: jest.fn()
    }

    requestStations = requestStationsBuilder(fakeAxios)
    requestStations()
    expect(fakeAxios.post).toBeCalled()
  })
})
