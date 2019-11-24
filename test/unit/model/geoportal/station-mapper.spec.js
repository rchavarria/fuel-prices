/* eslint-env jasmine */
import StationMapper from '../../../../src/model/geoportal/station-mapper'
import MyStation from '../../../../src/model/geoportal/my-station'

describe('StationMapper', () => {
  const mapper = new StationMapper()

  it('maps a null request', () => {
    const stations = mapper.map(null)
    expect(stations).toHaveLength(0)
  })

  it('maps as many stations as returned by the API', () => {

  })
})
