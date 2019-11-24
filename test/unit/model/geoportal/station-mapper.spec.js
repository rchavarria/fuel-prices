/* eslint-env jasmine */
import StationMapper from '../../../../src/model/geoportal/station-mapper'
import MyStation from '../../../../src/model/geoportal/my-station'

function buildData (...stations) {
  return {
    bbox: {},
    estaciones: stations
  }
}

function buildResponseStation (options = {}) {
  const defaults = {
    precio: 1.234,
    estacion: {
      id: 'just-an-id',
      rotulo: 'just-a-label',
      direccion: 'just-an-address',
      localidad: 'just-a-city',
      fechaPvp: '1/1/2019'
    }
  }

  return Object.assign({}, defaults, options)
}

describe('StationMapper', () => {
  const mapper = new StationMapper()

  it('maps a null request', () => {
    const stations = mapper.mapAll(null)
    expect(stations).toHaveLength(0)
  })

  it('maps as many stations as returned by the API', () => {
    const data = buildData(
      buildResponseStation(),
      buildResponseStation(),
      buildResponseStation()
    )

    const stations = mapper.mapAll(data)

    expect(stations).toHaveLength(3)
    expect(stations[0]).toBeInstanceOf(MyStation)
  })

  it('maps a station id', () => {
    const expectedStationId = 'station-id'
    const data = buildData(buildResponseStation({ estacion: { id: expectedStationId } }))

    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.id).toEqual(expectedStationId)
  })

  it('maps the fuels price for the station', () => {
    const expectedPrice = 1234.321
    const data = buildData(buildResponseStation({ precio: expectedPrice }))

    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.price).toEqual(expectedPrice)
  })

  it('maps the station label', () => {
    const expectedLabel = 'expected label'
    const data = buildData(buildResponseStation({ estacion: { rotulo: expectedLabel } }))

    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.label).toEqual(expectedLabel)
  })

  it('maps the station address', () => {
    const expectedAddress = 'expected address'
    const data = buildData(buildResponseStation({ estacion: { direccion: expectedAddress } }))

    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.address).toEqual(expectedAddress)
  })

  it('maps the station city', () => {
    const expectedCity = 'expected city'
    const data = buildData(buildResponseStation({ estacion: { localidad: expectedCity } }))

    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.city).toEqual(expectedCity)
  })

  it('maps the date for the price', () => {
    const expectedDate = '24/11/2019'
    const data = buildData(buildResponseStation({ estacion: { fechaPvp: expectedDate } }))

    const stations = mapper.mapAll(data)
    const station = stations[0]

    expect(station.priceDate).toEqual(expectedDate)
  })
})
