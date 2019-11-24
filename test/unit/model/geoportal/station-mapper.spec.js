/* eslint-env jasmine */
import StationMapper from '../../../../src/model/geoportal/station-mapper'
import MyStation from '../../../../src/model/geoportal/my-station'

describe('StationMapper', () => {
  const mapper = new StationMapper()

  it('maps a null request', () => {
    const station = mapper.map(null)
    expect(station).toBeInstanceOf(MyStation)
  })
})
