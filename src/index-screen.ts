import Config from './config/config'
import filterFavourites from './core/filter-favourites'

console.log('favorites', filterFavourites(Config.favourites)([]))
