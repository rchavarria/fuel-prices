import FavouriteStation from "../model/favourite-station";
import Station from '../model/station';

type Filter = (records: Station[]) => Station[];

/**
 * Given a list of favourite stations and a list of stations, filter those stations
 * that are present in the favourite list
 *
 * @param favourites
 *
 * @returns {function([]): []} Filters the given list of stations
 */
export default function filterFavourites (favourites: FavouriteStation[]): Filter {
  return (stationRecords: Station[]): Station[] => {
    const favouriteIds = favourites.map(f => f.id)
    return stationRecords.filter(record => favouriteIds.includes(record.id))
  }
}
