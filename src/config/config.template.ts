import CityId from '../domain/model/city-id';
import FavouriteStation from '../domain/model/favourite-station';

/**
 * Template for the configuration object
 */
export default {
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
