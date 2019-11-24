import MyStation from './my-station'

export default class StationMapper {
  map (requestData) {
    return new MyStation()
  }
}
