import {IStationResponse} from './station-response';

/**
 * See complete response on `doc/responses.md`
 */
export interface IStationListResponse {
  estaciones: IStationResponse[];
}
