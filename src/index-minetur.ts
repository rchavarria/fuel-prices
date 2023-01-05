import Config from './config/config';
import augmentWithFavourites from './core/augment-with-favourites';
import errorPrinter from './core/error-printer';
import filterFavourites from './core/filter-favourites';
import printerBuilder from './core/printer-builder';
import sortByPrice from './core/sort-by-price';
import {requestStationsOn} from './minetur/adapters/services/request-stations-on';

Promise.all(Config.cities.map(requestStationsOn))
  .then(allStations => allStations.flat())
  .then(filterFavourites(Config.favourites))
  .then(augmentWithFavourites(Config.favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(errorPrinter(console))
