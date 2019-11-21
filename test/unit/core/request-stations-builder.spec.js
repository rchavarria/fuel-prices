/* eslint-env jest */
import requestStationsBuilder from '../../../src/core/request-stations-builder'
import StationRecord from '../../../src/model/geoportal/station-record'

describe('requestStationsBuilder', () => {
  let requestStations,
    fakeRestClient

  beforeEach(() => {
    requestStations = requestStationsBuilder(null)

    const fakeResponse = {
      data: {
        estaciones: [
          {
            id: null,
            precio: 1.205,
            estacion: {
              id: 11591,
              rotulo: 'REPSOL',
              direccion: 'CALLE SETAS, 1',
              margen: 'D',
              codPostal: '19162',
              localidad: 'PIOZ',
              fechaPvp: '11/11/2019',
              favorita: false
            },
            favorita: false
          }
        ]
      }
    }

    fakeRestClient = {
      post: jest.fn(() => new Promise(resolve => resolve(fakeResponse)))
    }
  })

  it('creates a function', () => {
    expect(typeof requestStations).toEqual('function')
  })

  it('accepts a rest client as parameter and uses it', () => {
    requestStations = requestStationsBuilder(fakeRestClient)
    requestStations()
    expect(fakeRestClient.post).toBeCalled()
  })

  it('parses the response data to build station records', () => {
    requestStations = requestStationsBuilder(fakeRestClient)
    return requestStations()
      .then(records => {
        expect(records[0]).toBeInstanceOf(StationRecord)
      })
  })
})
