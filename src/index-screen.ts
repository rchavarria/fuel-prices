import Config from './config/config';
import {requestStationsOn} from './minetur/adapters/services/request-stations-on';
import augmentWithFavourites from './minetur/domain/app/augment-with-favourites';
import errorPrinter from './minetur/domain/app/error-printer';
import filterFavourites from './minetur/domain/app/filter-favourites';
import printerBuilder from './minetur/domain/app/printer-builder';
import sortByPrice from './minetur/domain/app/sort-by-price';

Promise.all(Config.cities.map(requestStationsOn))
  .then(allStations => allStations.flat())
  .then(filterFavourites(Config.favourites))
  .then(augmentWithFavourites(Config.favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(errorPrinter(console))
