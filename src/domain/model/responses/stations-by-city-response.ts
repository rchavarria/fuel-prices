import {StationResponse} from './station-response';

export interface StationsByCityResponse {
  Fecha: string;
  ListaEESSPrecio: StationResponse[];
  'Rótulo': string;
  Nota: string;
  ResultadoConsulta: 'OK' | 'ERROR';
}
