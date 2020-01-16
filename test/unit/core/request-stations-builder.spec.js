/* eslint-env jest */
import requestStationsBuilder from '../../../src/core/request-stations-builder'
import Config from '../../../src/config/config'
import StationRequestId from '../../../src/requests/city-id'
import Station from '../../../src/model/geoportal/station'

describe('requestStationsBuilder', () => {
  let cityId,
    requestStations,
    fakeRestClient

  beforeEach(() => {
    cityId = new StationRequestId('11', 221133)
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
    requestStations(cityId)
    expect(fakeRestClient.post).toBeCalled()
  })

  it('makes a request to a specific URL', () => {
    requestStations = requestStationsBuilder(fakeRestClient)
    requestStations(cityId)
    expect(fakeRestClient.post.mock.calls[0][0]).toEqual(Config.STATIONS_URL)
  })

  it('uses these options when requesting data', () => {
    requestStations = requestStationsBuilder(fakeRestClient)
    requestStations(cityId)

    const requestParams = fakeRestClient.post.mock.calls[0][1]
    expect(requestParams.idProvincia).toEqual(cityId.province)
    expect(requestParams.idMunicipio).toEqual(cityId.city)
  })

  it('parses the response data to build station records', () => {
    requestStations = requestStationsBuilder(fakeRestClient)
    return requestStations(cityId)
      .then(records => {
        expect(records[0]).toBeInstanceOf(Station)
      })
  })
})
