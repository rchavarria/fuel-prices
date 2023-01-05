/**
 * See complete response on `doc/responses.md`
 */
export interface IStationResponse {
  id: number;
  precio: number;
  estacion: {
    id: number;
    rotulo: string;
    direccion: string;
    localidad: string;
    fechaPvp: string;
  }
}
