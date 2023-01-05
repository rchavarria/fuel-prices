import Config from './config/config';
import {requestStationsOn} from './adapters/services/request-stations-on';
import augmentWithFavourites from './domain/app/augment-with-favourites';
import errorPrinter from './domain/app/error-printer';
import filterFavourites from './domain/app/filter-favourites';
import printerBuilder from './domain/app/printer-builder';
import sortByPrice from './domain/app/sort-by-price';

Promise.all(Config.cities.map(requestStationsOn))
  .then(allStations => allStations.flat())
  .then(filterFavourites(Config.favourites))
  .then(augmentWithFavourites(Config.favourites))
  .then(sortByPrice)
  .then(printerBuilder(console))
  .catch(errorPrinter(console))
