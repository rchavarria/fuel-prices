/* eslint-env jasmine */
import StationMapper from '../../../../src/model/geoportal/station-mapper'
import MyStation from '../../../../src/model/geoportal/my-station'

function buildResponseStation (id, price) {
  return {
    precio: price || 1.234,
    estacion: {
      id: id || 'just-an-id'
    }
  }
}

describe('StationMapper', () => {
  const mapper = new StationMapper()

  it('maps a null request', () => {
    const stations = mapper.mapAll(null)
    expect(stations).toHaveLength(0)
  })

  it('maps as many stations as returned by the API', () => {
    const data = {
      bbox: {},
      estaciones: [
        buildResponseStation(),
        buildResponseStation(),
        buildResponseStation()
      ]
    }
    const stations = mapper.mapAll(data)
    expect(stations).toHaveLength(3)
    expect(stations[0]).toBeInstanceOf(MyStation)
  })

  it('maps a station id', () => {
    const expectedStationId = 'station-id'
    const data = {
      bbox: {},
      estaciones: [
        buildResponseStation(expectedStationId)
      ]
    }
    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.id).toEqual(expectedStationId)
  })

  it('maps the fuels price for the station', () => {
    const expectedPrice = 1234.321
    const data = {
      bbox: {},
      estaciones: [
        buildResponseStation(undefined, expectedPrice)
      ]
    }
    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.price).toEqual(expectedPrice)
  })
})
