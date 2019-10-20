import CityId from '../requests/city-id'

const alcala = new CityId('28', 35174)
const guadalajara = new CityId('19', 20378)
const pioz = new CityId('19', 20506)

/**
 * Export cities to ask data for
 */
export default [
  alcala,
  guadalajara,
  pioz
]
