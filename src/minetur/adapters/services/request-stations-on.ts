import Station from '../../../model/geoportal/station';
import CityId from '../../../requests/city-id';
import {StationResponse} from '../../domain/model/responses/station-response';
import {StationsByCityResponse} from '../../domain/model/responses/stations-by-city-response';

const MINETUR_URL = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/'

function parseSpanishFloat(value: string): number {
  const inEnglish = value.replace(',', '.')
  const float = parseFloat(inEnglish)

  return isNaN(float) ? 99.999 : float;
}

export async function requestStationsOn(city: CityId): Promise<Station[]> {
  const cityParam = city.city
  const response = await fetch(`${MINETUR_URL}${cityParam}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

  const payload = await response.json() as StationsByCityResponse

  // TODO extract to a mapper
  return payload.ListaEESSPrecio.map((responseStation: StationResponse) => {
    const station = new Station()

    station.id = parseInt(responseStation.IDEESS, 10)
    station.price = parseSpanishFloat(responseStation['Precio Gasoleo A'])
    station.label = responseStation.Rótulo
    station.address = responseStation.Dirección
    station.city = responseStation.IDMunicipio
    station.priceDate = payload.Fecha

    return station
  })
}
