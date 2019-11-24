/* eslint-env jasmine */
import StationMapper from '../../../../src/model/geoportal/station-mapper'
import MyStation from '../../../../src/model/geoportal/my-station'

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
        {},
        {},
        {}
      ]
    }
    const stations = mapper.mapAll(data)
    expect(stations).toHaveLength(3)
  })

  it('maps a station id', () => {
    const expectedStationId = 'station-id'
    const data = {
      bbox: {},
      estaciones: [
        {
          estacion: {
            id: expectedStationId
          }
        }
      ]
    }
    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.id).toEqual(expectedStationId)
  })
})
