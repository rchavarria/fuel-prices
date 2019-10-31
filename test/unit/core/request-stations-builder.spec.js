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
    const fakeRestClient = {
      post: jest.fn()
    }

    requestStations = requestStationsBuilder(fakeRestClient)
    requestStations()
    expect(fakeRestClient.post).toBeCalled()
  })
})
