import CityId from '../requests/city-id'
import FavouriteStation from '../model/favourite-station'

/**
 * Template for the configuration object
 */
export default {
  // URL to get stations information
  STATIONS_URL: 'https://geoportalgasolineras.es/rest/busquedaEstaciones',

  // csv output file
  outputFile: 'logs/stations.csv',

  // cities to request data
  cities: [
    new CityId('01', 20001),
    new CityId('02', 19921),
    new CityId('03', 31223)
  ],

  // favourite stations
  favourites: [
    new FavouriteStation(1234, 'Alcalá: Alcampo'),
    new FavouriteStation(5678, 'Ciudad: gasolinera'),
    new FavouriteStation(1245, 'De aquí: y de allá'),
    new FavouriteStation(7899, '¿Cómo la identificas tú?')
  ]

}
